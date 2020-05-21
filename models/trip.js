const mongoose = require('mongoose')



const recommendationSchema = new mongoose.Schema({
  text: { type: String, required: [true, 'field required'] },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const tripSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'field required'], unique: true, maxlength: 100 },
  startingPointCity: { type: String, required: [true, 'field required'] },
  startingPointState: { type: String },
  startingPointCountry: { type: String, required: [true, 'field required'] },
  endPointCity: { type: String, required: [true, 'field required'] },
  endPointState: { type: String },
  endPointCountry: { type: String, required: [true, 'field required'] },
  distance: { type: String },
  routeImage: { type: String },
  image: { type: String },
  tags: [{ type: String, required: [true, 'field required'] }],
  scenery: { type: Number },
  enjoyment: { type: Number },
  photoGallery: [{ type: String }],
  videos: [{ type: String }],
  description: { type: String, required: [true, 'field required'] },
  timeOfYear: { type: String },
  highlights: [{ type: String }],
  pastTravellers: [{ type: String }],
  recommendations: [recommendationSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

tripSchema
  .pre('validate', function (next) {
    console.log('hello')
    // if (this.finalTrip.startingPointCity.toUpperCase() === this.finalTrip.endPointCity.toUpperCase()) {
    //   this.invalidate('End Point must be different from Start Point')
    // }
    next()
  })


tripSchema.plugin(require('mongoose-unique-validator'), { message: '{PATH} has already been taken' })

module.exports = mongoose.model('Trip', tripSchema)
