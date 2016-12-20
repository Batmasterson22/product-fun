'use strict'

function create (req, res, next) {
    req.category.save().then((savedCategory) => {
        res.json(savedCategory)
    })
}

module.exports.create = create