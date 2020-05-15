const User = require('../models/user')
const { notFound } = require('../lib/errorMessages')

async function userProfile(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}


async function userProfileEdit(req, res, next) {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(notFound)
    Object.assign(trip, req.body)
    await trip.save()
    res.status(202).json(trip)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  profile: userProfile
}