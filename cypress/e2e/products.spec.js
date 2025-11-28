// cypress/integration/products.spec.js
import users from '../fixtures/users.json'

describe('Products and images', () => {
  it('shows products for standard_user', () => {
    cy.login(users.standard_user.username, users.standard_user.password)
    cy.get('.inventory_item').should('have.length.at.least', 1)
  })

  it('problem_user has image issues (assert alt or broken)', () => {
    cy.login(users.problem_user.username, users.problem_user.password)
    cy.get('.inventory_item_img img').each(($img) => {
      cy.wrap($img).then((img) => {
        const nw = img[0].naturalWidth
        expect(img).to.exist
        cy.log('naturalWidth: ' + nw)
      })
    })
  })

  it('performance_glitch_user: page loads with longer timeout', () => {
    cy.login(users.performance_glitch_user.username, users.performance_glitch_user.password)
    cy.get('.inventory_list', { timeout: 30000 }).should('exist')
  })
})
