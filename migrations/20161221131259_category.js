'use strict'

exports.up = (knex, Promise) =>{
    return knex.schema.createTable('category', (categoryTable) => {
        categoryTable.increments()
        categoryTable.string('name')
    })
}

exports.down = (knex, Promise) =>{
    return knex.schema.dropTable('category')
}
