const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

const tripData = require('./data/trips')
const Trip = require('../models/trip')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  async (err, db) => {
    if (err) return console.log(err)

    try {
      await db.dropDatabase()
      const trips = await Trip.create(tripData)
      console.log(`${trips.length} made trips`)
      await mongoose.connection.close()
      console.log('Goodbye 👋')

    } catch (err) {
      console.log(err)
    }

  })