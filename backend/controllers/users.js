const User = require('../models/user')
const { notFound } = require('../lib/errorMessages')

async function userProfile(req, res, next) {
  const userId = req.params.userId
  try {
    const user = await User.findById(userId).populate('user').populate('userName').populate('message.user')
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

async function userIndex(req, res, next) {
  try {
    const users = await User.find().populate('user').populate('userName').populate('message.user')
    if (!users) throw new Error(notFound)
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

async function indivProfile(req, res, next) {

  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

async function indivProfileEdit(req, res, next) {

  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(notFound)
    Object.assign(user, req.body)
    await user.save()
    res.status(202).json(user)
  } catch (err) {
    next(err)
  }
}

async function messageCreate(req, res, next) {
  try {
    req.body.user = req.currentUser
    console.log(req.body)
    const receiveId = req.params.userId
    console.log(receiveId)
    const user = await User.findById(receiveId).populate('user').populate('userName').populate('message.user')
    if (!user) throw new Error(notFound)
    user.message.push(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

// async function messageDelete(req, res, next) {
//   try {
//     const tripId = req.params.id
//     const commentId = req.params.commentId
//     const trip = await Trips.findById(tripId)
//     if (!trip) throw new Error(notFound)
//     const commentToRemove = trip.recommendations.id(commentId)
//     if (!commentToRemove) throw new Error(notFound)
//     // if (!commentToRemove.user.equals(req.currentUser._id) || !trip.user.equals(req.currentUser._id)) throw new Error()
//     await commentToRemove.remove()
//     await trip.save()
//     res.sendStatus(204)
//   } catch (err) {
//     next(err)
//   }
// }



module.exports = {
  userProfile: userProfile,
  userIndex: userIndex,
  showProfile: indivProfile,
  editProfile: indivProfileEdit,
  messageCreate: messageCreate
  // messageDelete: messageDelete

}