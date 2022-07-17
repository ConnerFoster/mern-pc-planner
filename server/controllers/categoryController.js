const Category = require('../models/category')

//Handle category creation on POST
exports.category_create_post = (req, res, next) => {
  const category = new Category({
    title: req.body.title,
    description: req.body.description,
  })

  category.save((err) => {
    if (err) {
      return next(err)
    }

    res.redirect(category.url)
  })
}

//Display Category
exports.category_detail = (req, res, next) => {
  Category.findById(req.params.id, (err, results) => {
    if (err) {
      return next(err)
    } else {
      res.json(results)
    }
  })
}

//Update Category
exports.category_update_post = (req, res, next) => {
  const category = new Category({
    title: req.body.title,
    description: req.body.title,
    _id: req.params.id,
  })

  Category.findByIdAndUpdate(
    req.params.id,
    category,
    {},
    (err, updatedCategory) => {
      if (err) {
        return next(err)
      }
      res.redirect(updatedCategory.url)
    }
  )
}

//Delete Category (make sure products in category are deleted first)
