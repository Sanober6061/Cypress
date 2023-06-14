///<reference types="cypress"/>

describe('My First Testsuit',function()
 {
    it('Verify title of the page', function(){
        cy.visit('https://www.nopcommerce.com/en')
        cy.title().should('eq', 'Free and open-source eCommerce platform')
    })
  })
  