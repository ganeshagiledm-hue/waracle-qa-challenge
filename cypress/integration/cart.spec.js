// cypress/integration/cart.spec.js
import users from '../fixtures/users.json'

describe('Cart operations', () => {
  beforeEach(() => {
    cy.login(users.standard_user.username, users.standard_user.password)
  })

  it('add and remove an item', () => {
    cy.addToCartByName('Sauce Labs Backpack')
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.openCart()
    cy.get('.cart_item').should('have.length', 1)
    cy.contains('.cart_item', 'Sauce Labs Backpack').find('button').click()
    cy.get('.cart_item').should('have.length', 0)
  })

  it('add multiple items and validate cart count', () => {
    cy.addToCartByName('Sauce Labs Backpack')
    cy.addToCartByName('Sauce Labs Bike Light')
    cy.openCart()
    cy.get('.cart_item').should('have.length', 2)
  })
})
