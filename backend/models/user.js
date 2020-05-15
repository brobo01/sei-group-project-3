const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePhoto: { type: Array },
  garage: { type: String },
  dreamTrips: { type: String },
  trips: { type: mongoose.Schema.ObjectId, ref: 'Trip' }
})


userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .pre('validate', function (next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

// userSchema
//   .pre('save', function(next) {
//     if (this.isModified('password')) {
//       this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
//     }
//     next()
//   })


module.exports = mongoose.model('User', userSchema)