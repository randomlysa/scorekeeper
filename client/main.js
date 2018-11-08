import React from 'react'
import ReactDom from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from '../imports/api/players'
import TitleBar from '../imports/ui/TitleBar'
import AddPlayer from '../imports/ui/AddPlayer'
import Player from '../imports/ui/Player'

const renderPlayers = (playerList) => {
  return playerList.map(player => {
    return <Player key={player._id} player={player} />
  }) // playerList.map
} // const renderPlayers

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch()
    const title = 'Score Keeper'
    let jsx = (
      <div>
        <TitleBar title={title} />
        {renderPlayers(players)}
        <AddPlayer />
      </div>
    ); // let jsx
    ReactDom.render(
      jsx,
      document.getElementById('app')
    ); // ReactDom.render
  }); // Tracker.autorun
}) // Meteor.startup
