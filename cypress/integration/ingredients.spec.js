describe('Great British Bake Off', () => {
    const url = '/ingredients/chocolate'
    before(() => {
        cy.task('getIngredients', url).then((data) => {
            cy.intercept(`http://localhost:5000${url}`, (req) => {
                req.reply(data)
            }).as('cake')
        })
    })

    it('Cake ingredients', () => {
        cy.visit(url)
        cy.get('button').click()
        cy.wait('@cake')
        cy.contains('li', 'sugar').should('be.visible')
    })
})
