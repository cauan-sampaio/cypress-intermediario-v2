describe('Login teste', () => {
  const data = require('../../../cypress.env.json')
  it('passes', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: true }
    cy.login(user, password, options)
    cy.get('.blank-state-welcome-title').contains("Welcome to GitLab")
    cy.url().should('eq', 'http://localhost/users/sign_in');

  
})
})