// cypress/integration/checkout.spec.js
import users from '../fixtures/users.json'

describe('Checkout flow', () => {
  it('complete checkout successfully', () => {
    const u = users.standard_user
    cy.login(u.username, u.password)
    cy.addToCartByName('Sauce Labs Backpack')
    cy.openCart()
    cy.checkout('Jane', 'Doe', '90210')
    cy.get('.complete-header').should('contain', 'THANK YOU')
  })
})
