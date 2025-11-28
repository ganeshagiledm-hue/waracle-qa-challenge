// cypress/integration/auth.spec.js
import users from '../fixtures/users.json'

describe('Authentication flows', () => {
  it('standard_user can log in and log out', () => {
    const u = users.standard_user
    cy.login(u.username, u.password)
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain.text', 'Products')
    // logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('eq', 'https://qa-challenge.codesubmit.io/')
  })

  it('locked_out_user cannot log in', () => {
    const u = users.locked_out_user
    cy.login(u.username, u.password)
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'locked')
  })

  it('invalid credentials show error', () => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('no_such_user')
    cy.get('[data-test="password"]').type('badpass')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
