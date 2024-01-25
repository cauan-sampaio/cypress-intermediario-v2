describe('Create project', () => {
    const require = ('../../support/gui_commands')
    beforeEach(() => {
        cy.visit('/');
        cy.login();
      });
    
    it('Passes', () => {
    cy.Createprj()
    });
});