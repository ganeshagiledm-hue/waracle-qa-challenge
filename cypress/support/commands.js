Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('#user-name').clear().type(username)
  cy.get('#password').clear().type(password)
  cy.get('#login-button').click()
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
