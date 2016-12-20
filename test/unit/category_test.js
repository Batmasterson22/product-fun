/* eslint-env jasmine */

'use strict'
const path = require('path')
const CategoryController = require(path.resolve('routes/category-controller'))

describe("Given a category controller", () => {
    describe("When I call create with a new category", () => {
        it("Then the category is saved and the new category is returned", (done) => {
            const savePromise = Promise.resolve({
                name: 'Me'
            })

            const categoryToSave = {
                save: () => {
                    return savePromise
                }
            }

            const req = {}
            req.category = categoryToSave

            const res = {
                json: (jsonData) => {
                    expect(jsonData).toEqual({
                        name: 'Me'
                    })
                    expect(next.calls.count()).toEqual(0)
                    done()
                }
            }

            const next = jasmine.createSpy('next')

            CategoryController.create(req, res, next)

        })
    })
})