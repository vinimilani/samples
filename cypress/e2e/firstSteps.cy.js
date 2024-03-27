import { selectors } from '../fixtures/selectors' //importing the menuSelector from the selectors file

describe ('Basic E2E Testing', () => {
    it('First steps on cypress docs page', () => {
        cy.intercept('GET', 'https://docs.cypress.io/guides/overview/why-cypress/').as('PageLoaded') //intercepting an API call to wait
        cy.visit('/') //we set the test URL on the config file, so we can just use '/'
        cy.get('h1').should('contain', 'Why Cypress?').and('be.visible') //visibility and text assertions
        cy.get(selectors.headerMenu).should('have.attr', 'href') //attribute assertion
        cy.wait('@PageLoaded') //waiting for the API call to make sure that the content loaded
        cy.wait(3000) //this wait is just to make sure that the page is fully loaded
        cy.get(selectors.searchIcon).click() //opening the search bar
        cy.get(selectors.searchBar).type('first steps', {delay: 200}) //delaying to simulate a real user typing
        cy.get(selectors.searchX).click() //clearing the search bar
        })

    it('Using premade commands', () => {
        cy.visit('/')
        cy.validateLabels() //this is a custom command that we created on the commands.js file
    })
})