import React from 'react';
import { Players } from '../api/players'

export default class AddPlayer extends React.Component{
  handleSubmit(e) {
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

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add player</button>
        </form>
    )
  }
}