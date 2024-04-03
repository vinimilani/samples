import { selectors } from '../fixtures/selectors' //importing the menuSelector from the selectors file

describe.skip('Basic E2E Testing', {retries: 1}, () => { //this spec will be skipped on the pipeline, since the github actions machine is too slow to find elements

    beforeEach(() => {
        cy.clearCookies() //clearing cookies before each test
    })
    it('First steps on cypress docs page', () => {
        cy.intercept('GET', 'https://js.hs-banner.com/v2/5511862/banner.js').as('PageLoaded') //intercepting an API call to wait
        cy.visit('/') //we set the test URL on the config file, so we can just use '/'
        cy.get('h1').should('contain', 'Why Cypress?').and('be.visible') //visibility and text assertions
        cy.get(selectors.headerMenu).should('have.attr', 'href') //attribute assertion
        cy.wait('@PageLoaded') //waiting for the API call to make sure that the content loaded
        cy.get(selectors.searchIcon).click() //opening the search bar
        cy.get(selectors.searchBar).type('first steps', {delay: 200}) //delaying to simulate a real user typing
        cy.get(selectors.searchX).click() //clearing the search bar
        })

    it('Using premade commands', () => {
        cy.intercept('GET', 'https://js.hs-banner.com/v2/5511862/banner.js').as('PageLoaded')
        cy.visit('/')
        cy.validateLabels() //this is a custom command that we created on the commands.js file
        cy.get(selectors.APIdoc).click() //clicking on the API doc link
        cy.url().should('include', '/api/table-of-contents') //asserting that the URL contains the expected string
        cy.wait('@PageLoaded') //on CI/CD this wait is necessary to make sure that the cookie banner is loaded
        cy.get(selectors.cookieAccept).click() //closing the cookie banner
        cy.title().should('eq', 'Table of Contents | Cypress Documentation') //asserting the page title
    })
})