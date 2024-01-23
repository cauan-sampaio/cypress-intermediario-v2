describe('Logout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login();
  });
  it('Exit sucesso', () => {
    cy.Logout();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/users/sign_in`)
  });
});