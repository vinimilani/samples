import { LoginData } from '../fixtures/loginData'
import { selectors } from '../fixtures/selectors' 

describe ('Basic Login', () => {
    it('Basic Login', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get(selectors.userName).type(LoginData.validUser.username)
        cy.get(selectors.password).type(LoginData.validUser.password + '{enter}')
        cy.get(selectors.loginConfirmation).should('contain', 'You logged into a secure area!')
        cy.get(selectors.subheader).should('contain', 'Welcome to the Secure Area. When you are done click logout below.')
        cy.get(selectors.logoutButton).click() //logging out
    })
})