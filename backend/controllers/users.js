const User = require('../models/user')
const { notFound } = require('../lib/errorMessages')

async function userProfile(req, res, next) {
  const userId = req.params.userId
  try {
    const user = await User.findById(userId)
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

async function userIndex(req, res, next) {
  try {
    const users = await User.find()
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

module.exports = {
  userProfile: userProfile,
  userIndex: userIndex,
  showProfile: indivProfile,
  editProfile: indivProfileEdit

}