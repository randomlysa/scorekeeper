import React from 'react'
import ReactDom from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from '../imports/api/players'
import TitleBar from '../imports/ui/TitleBar'
import AddPlayer from '../imports/ui/AddPlayer'

const modScore = (id, amount) => {
  Players.update(
    id, {
      $inc: {
        score: amount
      }
  })
}

const renderPlayers = (playerList) => {
  return playerList.map(player => {
    const id = player._id;
    return (
      <p key={id}>
        {player.name} has {player.score} point(s).
        <button onClick={modScore.bind(this, id, 1)}>+1</button>
        <button onClick={modScore.bind(this, id, -1)}>-1</button>
        <button onClick={
          () => {
            Players.remove({_id: player._id})
          }
        }> X </button>
      </p>
    ) // return
  })
}

const handleSubmit = (e) => {
  const playerName = e.target.playerName.value;
  e.preventDefault();
  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    })
  } // if playerName
} // handleSubmit

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch()
    const title = 'Score Keeper'
    let jsx = (
      <div>
        <TitleBar title={title} />
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add player</button>
        </form>
        <AddPlayer />
      </div>
    ); // let jsx
    ReactDom.render(
      jsx,
      document.getElementById('app')
    ); // ReactDom.render
  }); // Tracker.autorun
}) // Meteor.startup
