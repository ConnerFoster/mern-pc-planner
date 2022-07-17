const express = require('express')
const router = express.Router()

const Category = require('../models/category')

router.get('/', (req, res, next) => {
  Category.find({}, (err, results) => {
    if (err) {
      next(error)
    }
    res.json(results)
  })
})

module.exports = router
