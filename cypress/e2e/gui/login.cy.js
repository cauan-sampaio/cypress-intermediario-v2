describe('Login teste', () => {
  const data = require('../../../cypress.env.json')
  it('passes', () => {
    cy.visit('/')
    cy.login()
    cy.get('.blank-state-welcome-title').contains("Welcome to GitLab")
    cy.url().should('eq', 'http://localhost/users/sign_in');

  
})
})