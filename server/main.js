import { Meteor } from 'meteor/meteor'
import { Players } from '../imports/api/players'

Meteor.startup(() => {
  Players.insert({
    name: 'Dave',
    score: 40
  })

  console.log(Players.find().fetch())
})