

Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login()
  })

  Cypress.Commands.add('Logout', (
  ) => {

   const Logout = () =>{
    cy.get('.header-user-dropdown-toggle').click()
    cy.get('.sign-out-link').click()
   }
    Logout()
  })

  Cypress.Commands.add('Createprj', () => {

    const Createprj = () => {
      cy.get('[href="/projects/new"] > .blank-state-body > .blank-state-title').click()
      cy.get('#blank-project-name > .project-name > #project_name').type('Meu projeto')
      cy.get('#blank-project-pane > #new_project > .visibility-level-setting > :nth-child(3) > #project_visibility_level_20').click()
      cy.get('#project_initialize_with_readme').click()
      cy.get('#blank-project-pane > #new_project > .btn-success').click()
    }
    Createprj();
  })

  Cypress.Commands.add('gui_createProject', project => {
    cy.visit('/projects/new')
  
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
  })
  