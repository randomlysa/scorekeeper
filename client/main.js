import React from 'react'
import ReactDom from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from '../imports/api/players'

const renderPlayers = (playerList) => {
  return playerList.map(player => {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  })
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch()
    const title = 'Score Keeper'
    let jsx = (
      <div>
        <h1>{title}</h1>
        {renderPlayers(players)}
      </div>
    ); // let jsx
    ReactDom.render(
      jsx,
      document.getElementById('app')
    ); // ReactDom.render
  }); // Tracker.autorun
}) // Meteor.startup
