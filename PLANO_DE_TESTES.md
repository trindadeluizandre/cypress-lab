PLANO DE TESTES - MODULO DE AUTENTICACAO E CADASTRO

OBJETIVO
Validar as funcionalidades de login e cadastro de usuarios, garantindo a integridade dos dados e a usabilidade do fluxo de navegacao.

CENARIOS DE TESTE (MANUAL E AUTOMATIZADO)

TELA DE LOGIN
CT001: Validar login com e-mail e senha corretos (Caminho Feliz).
CT002: Validar mensagem de erro ao inserir e-mail em formato invalido.
CT003: Validar que o botao Entrar nao processa campos vazios.
CT004: Verificar se o link Cadastre-se aqui redireciona para a tela de cadastro.

TELA DE CADASTRO (PESSOA FISICA)
CT005: Validar criacao de conta preenchendo todos os campos obrigatorios.
CT006: Validar se o campo CPF aceita apenas o formato correto.
CT007: Verificar se o campo Estado (UF) esta limitado a 2 caracteres.
CT008: Validar a funcao do link Voltar para Login.

CRITERIOS DE ACEITE
O sistema deve impedir o envio de formularios com campos obrigatorios vazios.
A navegacao entre as telas de Login e Cadastro deve ser funcional sem Erro 404.
O layout deve ser responsivo em resolucoes de desktop.

FERRAMENTAS
VS Code: IDE de desenvolvimento e escrita de testes.
Brave Browser: Ambiente de execucao para testes manuais.
Cypress: Framework para automacao de testes E2E.