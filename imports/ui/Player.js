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
      <div key={this.props.player._id} className="item">
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.rank} {this.props.player.position} {this.props.player.score} point(s)
            </p>
          </div>

          <div className="player__actions">
            <button className="button button--round" onClick={this.modScore.bind(this, this.props.player._id, 1)}>+1</button>
            <button className="button button--round" onClick={this.modScore.bind(this, this.props.player._id, -1)}>-1</button>
            <button className="button button--round" onClick={
              () => {
                Players.remove({_id: this.props.player._id})
              }
            }> X </button>
          </div>
        </div>
      </div>
    )
  }
} // class Player

Player.propTypes = {
  player: PropTypes.object.isRequired
}
