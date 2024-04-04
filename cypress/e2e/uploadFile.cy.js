
describe('How to upload a file', () => {
    it('File Upload', () => {
        cy.visit('https://qaplayground.dev/apps/upload/')
        cy.get('input[type="file"]').selectFile('cypress/fixtures/dwight.jpg', { force: true}); //forcing because is not visible
        cy.get('#num-of-files').should('have.text', '1 File Selected') //asserting that the file was uploaded
    })
})