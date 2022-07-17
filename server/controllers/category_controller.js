const Category = require('../models/category')

exports.category_detail = (req, res, next) => {
  Category.find({}, (err, results) => {
    if (err) {
      next(error)
    }
    res.json(results)
  })
}
