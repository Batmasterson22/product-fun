'use strict'

function create (req, res, next) {
    req.category.save().then((savedCategory) => {
        //res.json(savedCategory)
        console.log(savedCategory)
        res.render('index', {savedCategory})
    })
}

module.exports.create = create
