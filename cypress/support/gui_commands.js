Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
  }

  const options = {
    cacheAcrossSpecs: true,
    validate,
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})
  Cypress.Commands.add('Logout', (
  ) => {

   const Logout = () =>{
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
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

  Cypress.Commands.add('gui_createIssue', issue => {
    cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
  
    cy.get('#issue_title').type(issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains('Submit issue').click()
  })


Cypress.Commands.add('gui_setLabelOnIssue', label => {
  cy.get('.qa-edit-link-labels').click()
  cy.contains(label.name).click()
  cy.get('body').click()
})

Cypress.Commands.add('gui_setMilestoneOnIssue', milestone => {
  cy.get('.block.milestone .edit-link').click()
  cy.contains(milestone.title).click()
})