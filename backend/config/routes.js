const router = require('express').Router()
const trips = require('../controllers/trips')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')
const user = require('../controllers/users')


router.route('/trips')
  .get(trips.index)
  .post(trips.create)
// .post(secureRoute, trips.create)

router.route('/trips/:id')
  .get(trips.show)
  .put(trips.update)
  .delete(trips.delete)
// .put(secureRoute, trips.update)
// .delete(secureRoute, trips.delete)

router.route('/trips/:id/comments')
  // .post(trips.commentCreate)
  .post(secureRoute, trips.commentCreate)

router.route('/trips/:id/comments/:commentId')
  .delete(trips.commentDelete)
//   .delete(secureRoute, trips.commentDelete)

router.route('/users')
  .get(user.userIndex)


//* friends profiles
router.route('/users/:userId')
  .get(user.userProfile)
  .post(secureRoute, user.messageCreate)



//* indiv user profile
router.route('/profile')
  .get(secureRoute, user.showProfile)

router.route('/profile/:id/edit')
  .put(secureRoute, user.editProfile)




router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

module.exports = router