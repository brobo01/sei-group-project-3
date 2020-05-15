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
      const trips = await Trip.create(tripData)
      console.log(`${trips.length} made trips`)

      const users = await User.create(userData)
      console.log(`${users.length} users made`)
      await mongoose.connection.close()
      console.log('Goodbye 👋')

    } catch (err) {
      console.log(err)
    }

  })