const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({path: './config.env'})
const port = process.env.PORT || 5000

const Category = require('./models/category')
const categoriesRouter = require('./routes/categories')
const categoryRouter = require('./routes/category')

app.get('/', (req, res, next) => {
  res.end('hello world')
})

app.use(cors())
app.use(express.json())
//app.use(require('./routes/record'))

app.use('/categories', categoriesRouter)
app.use('/category', categoryRouter)

const mongoose = require('mongoose')
const mongoDB = process.env.ATLAS_URI

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error connecting to MongoDB: '))

const test = new Category({
  title: 'CPU',
  description: 'central processing unit, testing ',
})

const test2 = new Category({
  title: 'GPU',
  description: 'video card',
})

test.save((err, test) => {
  if (err) return console.error(err)
  console.log(test.title + ' saved to db')
})

test2.save((err, test) => {
  if (err) return console.error(err)
  console.log(test.title + ' saved to db')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
