const mongoose = require('mongoose')



const recommendationSchema = new mongoose.Schema({
  text: { type: String, required: [true, 'field required'] },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const tripSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'field required'], unique: true, maxlength: 100 },
  startingPoint: { type: String, required: [true, 'field required'] },
  endPoint: { type: String, required: [true, 'field required'] },
  distance: { type: String },
  routeImage: { type: String },
  image: { type: String },
  tags: { type: Array, required: [true, 'field required'] },
  ratings: {
    scenery: { type: Number },
    enjoyment: { type: Number }
  },
  photoGallery: { type: Array },
  videos: { type: Array },
  description: { type: String, required: [true, 'field required'] },
  timeOfYear: { type: String },
  highlights: { type: Array },
  pastTravellers: { type: Array },
  recommendations: [recommendationSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

tripSchema
  .pre('validate', function (next) {
    if (this.startingPoint.toUpperCase() === this.endPoint.toUpperCase()) {
      this.invalidate('End Point must be different from Start Point')
    }
    next()
  })


tripSchema.plugin(require('mongoose-unique-validator'), { message: '{PATH} has already been taken' })

module.exports = mongoose.model('Trip', tripSchema)
