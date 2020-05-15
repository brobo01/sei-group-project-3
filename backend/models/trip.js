const mongoose = require('mongoose')



const recommendationSchema = new mongoose.Schema({
  text: { type: String, required: true }
  // user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, maxlength: 100 },
  startingPoint: { type: String, required: true },
  endPoint: { type: String, required: true },
  distance: { type: String },
  routeImage: { type: String },
  image: { type: String },
  tags: { type: Array, required: true },
  ratings: {
    scenery: { type: Number },
    enojoyment: { type: Number }
  },
  photoGallery: { type: Array, required: true },
  videos: { type: Array },
  description: { type: String, required: true },
  timeOfYear: { type: String },
  highlights: { type: Array },
  pastTravellers: { type: Array },
  recommendations: [recommendationSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Trip', tripSchema)
