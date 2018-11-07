import React from 'react'
import ReactDom from 'react-dom'
import { Meteor } from 'meteor/meteor'

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99
}, {
  _id: '2',
  name: 'Jeff',
  score: -1
}, {
  _id: '3',
  name: 'Andrew',
  score: -12
}]

const renderPlayers = (playerList) => {
  return playerList.map(player => {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>
  })

}

Meteor.startup(() => {
  const title = 'Score Keeper'
  let jsx = (
    <div>
      <h1>{title}</h1>
      {renderPlayers(players)}

    </div>
  )

  ReactDom.render(
    jsx, document.getElementById('app')
  )
})