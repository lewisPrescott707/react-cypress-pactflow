describe('Great British Bake Off', () => {
    before(() => {
        cy.setupPact('bake-off-ui', 'ingredients-api')
        cy.intercept(`http://localhost:5000/ingredients/chocolate`,
        {
          statusCode: 200,
          body: ["sugar"],
          headers: { 'access-control-allow-origin': '*' }
        }).as('ingredients')
    })

    it('Cake ingredients', () => {
        cy.visit('/ingredients/chocolate')
        cy.get('button').click()
        cy.usePactWait('ingredients').its('response.statusCode').should('eq', 200)
        cy.contains('li', 'sugar').should('be.visible')
    })
})
