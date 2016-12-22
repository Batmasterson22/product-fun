// in test/integration/category_test.js
var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../app');
var Product = require('../../models/category');

describe('Given a Category Form', function () {
  beforeEach((done) => {
    Product.fetchAll().then((fetched) => {
      return fetched.map((categroy) => {
        return categroy.destroy()
      })
    }).then(done)
  })

  describe('post /index', function () {
    it('When you have a new category, post ', function (done) {
      request(app)
            .post('/')
            .send({
                name: 'Me'
            })
            .expect(200)
            .expect((response) => {
                expect(response.body.id).not.be.undefined
                expect(response.body).to.contain(jasmine.objectContaining({
                    name: 'Me'
                }).sample)
            })
            .end((error) => {
                if (error) {
                    done.fail(error)
                    return
                }
                done()
            })
    })
  })
})
