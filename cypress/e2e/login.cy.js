describe('Projeto QA Avançado - Testes de Login', () => {

  it('CT003 - Deve clicar no botão de entrar e validar o envio', () => {
    cy.visit('login.html')
    cy.get('[data-cy="input-email"]').type('andre@teste.com')
    cy.get('[data-cy="input-password"]').type('123456')
    cy.get('[data-cy="btn-login"]').click()
    cy.url().should('include', 'email=andre%40teste.com')
  })

  it('CT004 - Deve validar que a senha é obrigatória', () => {
    cy.visit('login.html')
    cy.get('[data-cy="input-email"]').type('andre@teste.com')
    cy.get('[data-cy="btn-login"]').click()
    cy.url().should('not.include', 'password=')
  })

  it('CT005 - Deve realizar login com sucesso limpando espaços em branco no e-mail', () => {
    cy.visit('login.html')
    const emailComEspacos = '  andre@teste.com  '
    cy.get('[data-cy="input-email"]').type(emailComEspacos)
    cy.get('[data-cy="input-password"]').type('123456')
    cy.get('[data-cy="btn-login"]').click()
    cy.url().should('include', 'email=andre%40teste.com')
  })

  it('CT006 - Deve preservar espaços em branco no campo de senha', () => {
    cy.visit('login.html')
    const senhaComEspacos = ' 123 456 ' 
    cy.get('[data-cy="input-email"]').type('andre@teste.com')
    cy.get('[data-cy="input-password"]').type(senhaComEspacos)
    cy.get('[data-cy="btn-login"]').click()
    cy.url().should('include', 'password=+123+456+')
  })

  it('CT007 - Deve validar o link de cadastro', () => {
    cy.visit('login.html')
    // Usando o seletor genérico 'a' ou o data-cy se você já tiver criado
    cy.get('a').click() 
  })

})