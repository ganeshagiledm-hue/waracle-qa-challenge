import users from '../fixtures/users.json'

describe('Checkout flow', () => {
  it('complete checkout successfully', () => {
    const u = users.standard_user

    cy.login(u.username, u.password)
    cy.addToCartByName('Sauce Labs Backpack')
    cy.openCart()
    cy.checkout('Jane', 'Doe', '90210')

    // assert final page
    cy.url().should('include', 'checkout-complete')

    // correct success message shown by the UI
    cy.get('.complete-header', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Thank you for your order!')
  })
})

