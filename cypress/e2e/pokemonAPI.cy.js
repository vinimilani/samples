import  pokemonTypes  from '../fixtures/pokemonTypes.js'

describe('Pokemon API Testing', () => {
  // In this test, we're using an open API from Pokemon TCG to get the types of Pokemons
  // We're going to compare the Pokemon Types we have in a fixture with the types we get from the Pokemon API
  it('Getting type of Pokemons', () => {
    const types = pokemonTypes // Creating a fixture with the types of Pokemons
    cy.log(types)
    cy.request('GET', 'https://api.pokemontcg.io/v2/types') // Making a GET request to the API
      .then((response) => { // Using a promise to handle the response
        expect(response.status).to.eq(200) // Asserting the status code - success should be 200
        expect(response.body).to.have.property('data') // Asserting that the response has a property called data that brings all the types   
        expect(response.body.data).to.have.length(11) // Asserting that the response has 11 types
        for (let i = 0; i < types.length; i++) { // Looping through the types
          expect(response.body.data[i]).to.eq(types[i]) // Asserting that the types from the API match the types from the fixture
        }
      })
  })
})