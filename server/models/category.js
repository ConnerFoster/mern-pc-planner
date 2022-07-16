const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
})

//Add Virtual for URL

module.exports = mongoose.model('Category', CategorySchema)
