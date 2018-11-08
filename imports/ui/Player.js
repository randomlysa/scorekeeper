import React from 'react';
import PropTypes from 'prop-types'

import { Players } from '../api/players'

export default class Player extends React.Component{
  modScore (id, amount) {
    Players.update(
      id, {
        $inc: {
          score: amount
        }
    }) // Players.update
  } // modScore

  render() {
    return (
      <p key={this.props.player._id}>
        {this.props.player.name} has {this.props.player.score} point(s).
        <button onClick={this.modScore.bind(this, this.props.player._id, 1)}>+1</button>
        <button onClick={this.modScore.bind(this, this.props.player._id, -1)}>-1</button>
        <button onClick={
          () => {
            Players.remove({_id: this.props.player._id})
          }
        }> X </button>
      </p>
    )
  }
} // class Player

Player.propTypes = {
  player: PropTypes.object.isRequired
}
