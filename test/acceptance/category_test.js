'use strict'

const until = protractor.ExpectedConditions

describe('Given the index page', () => {
  let saveCategoryButton = element(by.id('savedCategory'))
  let categoryInput = element(by.id('categoryName'))

    describe('When I navigate to the index page', () => {

        it('should display the label, textbox, and button to create a Category', () => {
            browser.get('/')

            expect(element(by.id('lbCategoryName')).getText()).toEqual('Name')
            expect(categoryInput.getText()).toEqual('')
            expect(saveCategoryButton.getText()).toEqual('Create Category')
        })

        it('should display the label, textbox, and button to create a Product', () => {
            browser.get('/')
            expect(element(by.id('ProductName')).getAttribute('type')).toEqual('text')
            expect(element(by.id('ProductPrice')).getAttribute('type')).toEqual('text')
            expect(element(by.id('ProductDescription')).getAttribute('type')).toEqual('text')
            expect(element(by.id('btCreateProduct')).getText()).toEqual('Create Product')

        })

        it('should display the label and list of Products', () => {
            browser.get('/')

            expect(element(by.id('lbProductList')).getText()).toEqual('Product List')

        })
    })

    describe('When I navigate / and fill in the Category textbox', () => {
        it('should add a category to the database and add to the checkbox group', () => {
          browser.get('/')
          expect(element.all(by.css("input[type='checkbox']")).count()).toEqual(0)
          categoryInput.sendKeys('SpaceBoots')
          saveCategoryButton.click()

          //'someCoolProduct'
          // expect(element.all(by.name('categories')).filter((elem, index) => {
          //   return elem.getAttribute('value').then((text) => {
          //     return text === 'someCoolProduct'
          //   })
          // }).first().getAttribute('value')).toEqual('someCoolProduct')
          // expect(element.all(by.css("input[type='checkbox']")).count()).toEqual(1)
          expect(($$("input[type='checkbox']")).count()).toEqual(1)
        })
    })


})
