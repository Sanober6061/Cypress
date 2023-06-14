///<reference types="cypress"/>
  

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('.SDkEP').type("test","{Enter}")                                                 
    
  })