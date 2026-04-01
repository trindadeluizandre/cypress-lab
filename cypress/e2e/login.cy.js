// O 'describe' agrupa todos os seus casos de teste de login
describe('Projeto QA Avançado - Testes de Login', () => {

  it('CT003 - Deve clicar no botão de entrar e validar o envio', () => {
    cy.visit('login.html')

    // Preenche os dados
    cy.get('[data-cy="input-email"]').type('andre@teste.com')
    cy.get('[data-cy="input-password"]').type('123456')

    // Executa o clique
    cy.get('[data-cy="btn-login"]').click()

    // Validação
    cy.url().should('include', 'email=andre%40teste.com')
  })

  it('CT004 - Deve validar que a senha é obrigatória', () => {
    cy.visit('login.html')

    // Preenche apenas o e-mail, deixando a senha vazia
    cy.get('[data-cy="input-email"]').type('andre@teste.com')
    
    // Clica no botão sem digitar a senha
    cy.get('[data-cy="btn-login"]').click()

    // Validação: Garante que a URL NÃO contém a confirmação de envio da senha
    cy.url().should('not.include', 'password=')
  })

})