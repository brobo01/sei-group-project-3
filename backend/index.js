const express = require('express')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
// const logger = require('./lib/logger')
const router = require('./config/routes')
const { dbURI , port } = require('./config/environment')
const errorHandler = require('./lib/errorHandler')


mongoose.connect(dbURI , { useNewUrlParser: true, useUnifiedTopology: true } , (err) => {
  if (err) return console.log(err)
  console.log('Mongo is connected!')
})

// app.use(bodyParser.json())

// app.use(logger)

app.use('/api',router)

app.use(errorHandler)

app.listen(port, () => console.log(`Express is listening on port ${port}`))