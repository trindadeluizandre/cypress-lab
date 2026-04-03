describe('Projeto QA Avançado - Testes de Login', () => {

  // Disciplina Complementar: Uso de Arrow Functions e Hooks de Ciclo de Vida
  beforeEach(() => {
    cy.visit('login.html')
  })

  // Refatoração: Centralização de seletores para facilitar manutenção
  const seletores = {
    email: '[data-cy="input-email"]',
    senha: '[data-cy="input-password"]',
    botaoLogin: '[data-cy="btn-login"]',
    linkCadastro: 'a'
  }

  it('CT003 - Deve clicar no botão de entrar e validar o envio', () => {
    const { email, senha, botaoLogin } = seletores // Disciplina Complementar: Destructuring
    
    cy.get(email).type('andre@teste.com')
    cy.get(senha).type('123456')
    cy.get(botaoLogin).click()
    cy.url().should('include', 'email=andre%40teste.com')
  })

  it('CT004 - Deve validar que a senha é obrigatória', () => {
    const { email, botaoLogin } = seletores
    
    cy.get(email).type('andre@teste.com')
    cy.get(botaoLogin).click()
    cy.url().should('not.include', 'password=')
  })

  it('CT005 - Deve realizar login com sucesso limpando espaços em branco no e-mail', () => {
    const { email, senha, botaoLogin } = seletores
    const emailComEspacos = '  andre@teste.com  '
    
    cy.get(email).type(emailComEspacos)
    cy.get(senha).type('123456')
    cy.get(botaoLogin).click()
    cy.url().should('include', 'email=andre%40teste.com')
  })

  it('CT006 - Deve preservar espaços em branco no campo de senha', () => {
    const { email, senha, botaoLogin } = seletores
    const senhaComEspacos = ' 123 456 ' 
    
    cy.get(email).type('andre@teste.com')
    cy.get(senha).type(senhaComEspacos)
    cy.get(botaoLogin).click()
    cy.url().should('include', 'password=+123+456+')
  })

  it('CT007 - Deve validar o link de cadastro', () => {
    cy.get(seletores.linkCadastro).click()
    cy.url().should('include', 'cadastro.html') // Adicionando validação de URL que faltava
  })
})