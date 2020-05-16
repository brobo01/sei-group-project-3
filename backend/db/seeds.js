const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

const tripData = require('./data/trips')
const Trip = require('../models/trip')
const User = require('../models/user')
const userData = require('./data/users')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  async (err, db) => {
    if (err) return console.log(err)

    try {
      await db.dropDatabase()
      const users = await User.create(userData)
      console.log(`${users.length} users made`)


      const tripsWithUsers = tripData.map(trip => {
        return { ...trip, user: users[Math.floor(Math.random() * users.length)] }
      })

      const trips = await Trip.create(tripsWithUsers)

      console.log(`${trips.length} made trips`)


      await mongoose.connection.close()
      console.log('Goodbye 👋')



    } catch (err) {
      console.log(err)
    }

  })