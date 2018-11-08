import React from 'react'
import ReactDom from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from '../imports/api/players'

const renderPlayers = (playerList) => {
  return playerList.map(player => {
    return (
      <p key={player._id}>{
        player.name} has {player.score} point(s).
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
        <h1>{title}</h1>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add player</button>
        </form>
      </div>
    ); // let jsx
    ReactDom.render(
      jsx,
      document.getElementById('app')
    ); // ReactDom.render
  }); // Tracker.autorun
}) // Meteor.startup
