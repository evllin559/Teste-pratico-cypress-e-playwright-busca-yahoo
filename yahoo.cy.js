describe('Busca no Yahoo', () => {
  it('Deve buscar Pacto Soluções no Yahoo', () => {
    cy.visit('https://br.search.yahoo.com/')

    cy.get('input[name="p"]').type('Pacto Soluções{enter}')

    cy.get('#web ol li').should('exist')

    cy.contains('Pacto Soluções').should('be.visible')
  })
})
