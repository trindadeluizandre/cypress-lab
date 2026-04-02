Caso de Teste: CT005
Título: Validação de higienização (trim) no campo de e-mail
Prioridade: Alta
Tipo de Teste: Funcional / Regressão

Objetivo:
Garantir que o sistema de autenticação seja resiliente a entradas de dados com espaços vazios acidentais, evitando erros de processamento no back-end.

Cenário de Teste:
1. Acessar a página de login.
2. Inserir no campo e-mail: "  admin@teste.com  " (com dois espaços antes e dois depois).
3. Inserir a senha válida.
4. Clicar no botão "Entrar".

Critérios de Aceite (AC):
AC01: O sistema deve realizar o "trim" (remoção de espaços) antes do envio da requisição.
AC02: O usuário deve ser redirecionado para a Dashboard com sucesso.
AC03: Não deve ser exibida mensagem de "E-mail inválido" devido aos espaços.