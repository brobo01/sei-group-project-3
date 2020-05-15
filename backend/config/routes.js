const router = require('express').Router()
const trips = require('../controllers/trips')
// const auth = require('../controllers/auth')
// const secureRoute = require('../lib/secureRoute')
// const user = require('../controllers/users')


router.route('/trips')
  .get(trips.index)
  .post(trips.create)
// .post(secureRoute, trips.create)

router.route('/trips/:id')
  .get(trips.show)
  .put(trips.update)
  .delete(trips.delete)
  .put(trips.update)
  .delete(trips.delete)

// router.route('/trips/:id/comments')
//   .post(trips.commentCreate)
//   .post(secureRoute, trips.commentCreate)

// router.route('/trips/:id/comments/:commentId')
//   .delete(trips.commentDelete)
//   .delete(secureRoute, trips.commentDelete)

// router.route('/profile')
//   .get(user.profile)
//   .get(secureRoute, user.profile)

// router.route('/register')
//   .post(auth.register)

// router.route('/login')
//   .post(auth.login)

module.exports = router