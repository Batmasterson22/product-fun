const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const CategoryController = require('./category-controller')
const CategoryModel = require('../models/category')

router.get('/', function(req, res) {  
  res.render('index')
})

// router.post('/', function(req, res) {
//   // TODO: Create products
// });

router.post('/', bodyToCategory, CategoryController.create)

function bodyToCategory(req, res, next) {
  req.category = new CategoryModel(req.body)
  next()
}

module.exports = router;
