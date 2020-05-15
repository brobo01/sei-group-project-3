const Trips = require('../models/trips') //* To be updated ----------------
const { notFound } = require('../lib/errorMessages')


async function tripsIndex(req,res,next) {
  try {
    const trips = await Trips
    if (!trips) throw new Error(notFound)
    res.status(200).json(trips)
  } catch (err){
    next(err)
  }
}




module.exports = {
  index: tripsIndex
}
