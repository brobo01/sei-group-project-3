const Trips = require('../models/trip')
const { notFound } = require('../lib/errorMessages')


async function tripsIndex(req, res, next) {
  try {
    const trips = await Trips.find()
    if (!trips) throw new Error(notFound)
    res.status(200).json(trips)
  } catch (err) {
    next(err)
  }
}

// create

async function tripsCreate(req, res) {
  try {
    const newTrip = await Trips.create(req.body)
    res.status(202).json(newTrip)
  } catch (err) {
    res.json(err)
  }
}

// read

async function tripsShow(req, res) {
  const tripId = req.params.id
  try {
    const trip = await Trips.findById(tripId)
    if (!trip) throw new Error()
    res.status(200).json(trip)

  } catch (err) {
    res.status(404).json({ 'message': 'Not found' })
  }

}

// update

async function tripsUpdate(req, res) {
  const tripId = req.params.id
  try {
    const trips = await Trips.findByIdAndUpdate(
      tripId,
      req.body,
      { new: true, runValidators: true }
    )
    res.status(202).json(trips)
  } catch (err) {
    res.json(err)
  }
}

// delete

async function tripsDelete(req, res) {
  const tripId = req.params.id
  try {
    const tripToDelete = await Trips.findById(tripId)
    if (!tripToDelete) throw new Error('Not Found')
    await tripToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    res.json(err)
  }
}

///recommendations

async function recommendationsCreate(req, res, next) {
  try {
    const tripId = req.params.id
    const trip = await Trips.findById(tripId)
    if (!trip) throw new Error(notFound)

  } catch (err) {
    next(err)
  }
}


module.exports = {
  index: tripsIndex,
  create: tripsCreate,
  show: tripsShow,
  update: tripsUpdate,
  delete: tripsDelete
}
