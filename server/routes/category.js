const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.redirect('/categories')
})

router.get('/:id', category_controller.category_detail)

module.exports = router
