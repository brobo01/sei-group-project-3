const Trips = require('../models/trip')
const { notFound } = require('../lib/errorMessages')


async function tripsIndex(req, res, next) {
  try {
    const trips = await Trips.find()
    console.log(trips)
    if (!trips) throw new Error(notFound)
    res.status(200).json(trips)
  } catch (err) {
    next(err)
  }
}




module.exports = {
  index: tripsIndex
}
