Caso de Teste: CT006
Título: Preservação de espaços no campo de Senha
Prioridade: Alta
Tipo de Teste: Funcional / Segurança

Objetivo:
Garantir que o sistema NÃO remova espaços em branco do campo de senha, permitindo o uso de frases complexas de segurança.

Cenário de Teste:
1. Acessar a página de login.
2. Inserir e-mail válido.
3. Inserir na senha: " 123 456 " (um espaço no início, um no meio e um no fim).
4. Clicar em "Entrar".

Critérios de Aceite (AC):
AC01: O sistema deve enviar a senha exatamente como foi digitada (com os 3 espaços).
AC02: A URL (ou payload) deve conter os caracteres de espaço codificados (ex: %20 ou +).