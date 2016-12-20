'use strict'

const path = require('path')
const database = require(path.resolve('config/db'))

const CategoryModel = database.Model.extend({
    tableName: 'category'
})

module.exports = CategoryModel