const { User, Message } = require('../models/user')
const { notFound } = require('../lib/errorMessages')

async function userProfile(req, res, next) {
  const userId = req.params.userId
  try {
    const user = await User.findById(userId).populate('user').populate('userName').populate('message.user').lean()
    const messages = await Message.find({ $or: [{ recipient: userId }, { sender: userId }] }).populate('sender').populate('recipient').lean()
    user.messages = messages
    console.log('yo ' + messages)
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
    const user = await User.findById(req.currentUser._id).populate('user').populate('userName').populate('message.user').lean()
    const messages = await Message.find({ $or: [{ recipient: req.currentUser._id }, { sender: req.currentUser._id }] }).populate('sender').populate('recipient').lean()
    user.messages = messages
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

async function indivProfileEdit(req, res, next) {

  try {
    const user = await User.findById(req.currentUser._id)
    // const user = await User.findById('5ec52e53837d547b3dfc7459')
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
    req.body.sender = req.currentUser._id
    req.body.recipient = req.params.userId
    console.log(req.body)
    const message = await Message.create(req.body)
    res.status(201).json(message)
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