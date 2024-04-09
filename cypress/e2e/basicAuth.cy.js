import { LoginData } from '../fixtures/loginData'

describe('Basic Auth Login', ()=>{
    it('Login with basic auth', ()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: LoginData.basicAuth.username,
                password: LoginData.basicAuth.password
            }
        })
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.')
    })
})