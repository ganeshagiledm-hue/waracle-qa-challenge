// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').clear().type(username)
  cy.get('[data-test="password"]').clear().type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('addToCartByName', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .click()
})

Cypress.Commands.add('openCart', () => cy.get('.shopping_cart_link').click())

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type(firstName)
  cy.get('[data-test="lastName"]').type(lastName)
  cy.get('[data-test="postalCode"]').type(postalCode)
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
})
