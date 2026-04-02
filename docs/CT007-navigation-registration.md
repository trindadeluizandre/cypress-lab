Caso de Teste: CT007
Título: Validação de integridade do fluxo de navegação (Módulo de Cadastro)
Prioridade: Alta
Tipo de Teste: Funcional / Navegação

Objetivo:
Garantir a integridade do redirecionamento entre a interface de autenticação e o formulário de registro de novos usuários, assegurando que o ponto de entrada do funil de conversão esteja operacional e acessível.

Cenário de Teste:

Acessar a página de login (login.html).

Localizar o componente de hiperlink identificado pelo rótulo de cadastro ou tag de ancoragem (<a>).

Acionar o evento de clique no referido elemento.

Validar o carregamento e a renderização da nova interface.

Critérios de Aceite (AC):

AC01: O sistema deve realizar o redirecionamento imediato para a URI /cadastro.html.

AC02: A interface de destino deve renderizar integralmente o formulário "Cadastro de Pessoa Física" (DOM Ready), garantindo a visibilidade dos campos de entrada de dados.

AC03: O servidor deve retornar Status Code 200 (OK) para a requisição do novo recurso, sem erros de referência (404 Not Found) ou quebra de layout.

Status Final (02/04/2026): Aprovado
Executor: Andre Luiz Trindade