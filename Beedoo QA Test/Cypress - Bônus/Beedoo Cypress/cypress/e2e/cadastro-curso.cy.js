describe('Verificação de cadastro de cursos', () => {
  beforeEach(() =>{
    cy.visit('https://creative-sherbet-a51eac.netlify.app/')
    cy.get('[href="/new-course"] > .q-btn__content > .block').click()

      })
      //Teste de dropdown não realizado por conta da má forma de escrita do código e não foi possível localizá-lo
        it('Cadastro completo de curso', () => {
          cy.get('[aria-label="Nome do curso"]').type('Javascript')
          cy.get('.q-textarea > .q-field__inner > .q-field__control').type('Curso do básico ao avaçado em javascript')
          cy.get('[aria-label="Instrutor"]').type('Ana Luísa')
          cy.get('[aria-label="Data de início"]').type('2024-08-01')
          cy.get('[aria-label="Data de fim"]').type('2024-08-07')
          cy.get('[aria-label="Número de vagas"]').type('10')
          cy.get('.q-pa-md > .q-btn > .q-btn__content').click()

          //somente teste do click de exclusão de curso evidenciado com erro.
          cy.get('.q-card__actions.justify-center > .q-btn > .q-btn__content > .block').click()
        })
        it('Cadastro somente com nome e descrição', ()=>{

          cy.get('[aria-label="Nome do curso"]').type('Banco de dados')
          cy.get('.q-textarea > .q-field__inner > .q-field__control').type('Curso para iniciantes no mundo do BD')
          cy.get('.q-pa-md > .q-btn > .q-btn__content').click()

        })

        it('Cadastro vazio', ()=>{
          cy.get('.q-pa-md > .q-btn > .q-btn__content').click()

        })
      })