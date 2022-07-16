const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({path: './config.env'})
const port = process.env.PORT || 5000

app.get('/', (req, res, next) => {
  res.end('hello world')
})

app.use(cors())
app.use(express.json())
//app.use(require('./routes/record'))

const mongoose = require('mongoose')
const mongoDB = process.env.ATLAS_URI

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error connecting to MongoDB: '))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
