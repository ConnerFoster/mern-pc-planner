const express = require('express')
const router = express.Router()

const category_controller = require('../controllers/categoryController')

router.get('/', (req, res, next) => {
  res.redirect('/categories')
})

router.post('/create', category_controller.category_create_post)

//router.get('/:id/delete', category_controller.category_delete_get)

router.get('/:id', category_controller.category_detail)

module.exports = router
