describe ('Basic E2E Testing', () => {
    it('First steps on cypress docs page', () => {
        cy.visit('/') //we set the test URL on the config file, so we can just use '/'
        cy.get('h1').should('contain', 'Why Cypress?').and('be.visible') //visibility and text assertions
        cy.get('.navbar__link--active').should('have.attr', 'href') //attribute assertion
        cy.wait(2000)
        cy.get('.icon-light-transparent').click() //opening the search bar
        cy.get('#docsearch-input').type('first steps', {delay: 200}) //delaying to simulate a real user typing
        cy.get('.DocSearch-Reset').click() //clearing the search bar
        });
})