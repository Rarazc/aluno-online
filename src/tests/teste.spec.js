describe('testando o aluno online',()=>{
    it('novo requerimento',()=>{
        cy.visit('/')
        cy.get(':nth-child(5) > .nav-link').click()
    })
    it('criando novo requerimento',()=>{
        cy.get('.btn').click()
    })
    it('selecionando diciplina',()=>{
        cy.get('#inputDisciplina').select(1)
    })
    it('selecionando prova',()=>{
        cy.get('#inputProva').select(3)
    })
    it('texto',()=>{
        cy.get('#inputArgumentacao').type('gostaria de solicitar a prova p3')
    })
    it('enviando',()=>{
        cy.get('.btn-danger').click()
    })

})