'use strict'

const until = protractor.ExpectedConditions

describe('Given the index page', () => {
    describe('When I navigate to the index page', () => {
        it('should display the label, textbox, and button to create a Category', () => {
            browser.get('/products')

            expect(element(by.id('lbCategoryForm')).getText()).toEqual('New Category Form')
            expect(element(by.id('lbCategoryName')).getText()).toEqual('Name')
            expect(element(by.id('categoryName')).getText()).toEqual('')
            expect(element(by.id('btCreateCategory')).getText()).toEqual('Create Category')
        })

        it('should display the label, textbox, and button to create a Product', () => {
            browser.get('/products')
            console.log('ProductName ---------- > ', element(by.id('ProductName')).getId)
            console.log('ProductName ---------- > ', element(by.id('ProductName')).getTagName)
            expect(element(by.id('ProductForm')).getText()).toEqual('New Product Form')
            expect(element(by.id('ProductName')).getAttribute('type')).toEqual('text')
            expect(element(by.id('ProductPrice')).getAttribute('type')).toEqual('text')
            expect(element(by.id('ProductDescription')).getAttribute('type')).toEqual('text')
            expect(element(by.id('Category01')).getAttribute('type')).toEqual('checkbox')
            expect(element(by.id('Category02')).getAttribute('type')).toEqual('checkbox')
            expect(element(by.id('Category03')).getAttribute('type')).toEqual('checkbox')
            expect(element(by.id('btCreateProduct')).getText()).toEqual('Create Product')
            
        })

        it('should display the label and list of Products', () => {
            browser.get('/products')

            expect(element(by.id('lbProductList')).getText()).toEqual('Product List')
            
        })
    })

    describe('When I navigate / and fill in the Category textbox', () => {
        it('should add a category to the database', () => {
            
        })
    })

    
})