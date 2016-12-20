// in test/integration/category_test.js
var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../app');
var Product = require('../../models/category');

describe('Given a Category Form', function () {

  describe('post /index', function () {
    it('When you have a new category, post ', function (done) {
      request(app)
            .post('/')
            .send({
                name: 'Me' 
            })
            .expect(200)
            .expect((response) => {
                expect(response.body.id).toBeDefined()
                expect(response.body).toEqual(jasmine.objectContaining({
                    name: 'Me'
                }))
            })
            .end((error) => {
                if (error) {
                    done.fail(error)
                    return
                }
                done()
            })
    });
  });
});