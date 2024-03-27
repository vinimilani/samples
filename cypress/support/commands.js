Cypress.Commands.add("validateLabels", () => {
    //this command will be exported to use in any test, avoiding code recurtion
    cy.get('#What-youll-learn').should('contain', `What you'll learn`)
    cy.get('#In-a-nutshell').should('contain', `In a nutshell`)
});