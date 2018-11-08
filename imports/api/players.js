import { Mongo } from 'meteor/mongo'
import numeral from 'numeral'

export const Players = new Mongo.Collection('players')

export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    // players are already sorted by score in mongo.
    // Increase the rank if:
    // This is NOT the first player (first player should always have rank of 1)
    // AND
    // The previous player has a score greater than the current player.
    if(index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    // Return a new object with rank and position.
    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    } // return new object
  }); // player.map
}; // const calculatePlayerPositions
