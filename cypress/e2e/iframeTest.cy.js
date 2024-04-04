describe('Testing iframes', () => {
    it('Finding a button on 2 iframe levels', () => {
        cy.visit('https://qaplayground.dev/apps/iframe/') //visiting a page with 2 iframe levels
        cy.get('iframe').then($iframe => { //getting the iframe element)
            const $body = $iframe.contents().find('body') //getting the body of the first iframe
            cy.wrap($body).find('legend').should('have.text', 'First Level Iframe') //asserting that the text is the expected
            cy.wrap($body).find('iframe').then($iframe2 => { //getting the second iframe
                const $body2 = $iframe2.contents().find('body') //getting the body of the second iframe
                cy.wrap($body2).find('legend').should('have.text', 'Second Level Iframe') //asserting that the text is the expected
                cy.wrap($body2).find('.btn-green-outline').click() //clicking on the button
                cy.wrap($body2).find('#msg').should('have.text', 'Button Clicked') //asserting that the button was clicked
            })
        })
    })
})