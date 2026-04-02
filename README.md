Cypress Automation Laboratory / Laboratório de Automação Cypress
This repository serves as a technical environment for Software Quality Assurance (QA) and Automated Testing development. It is structured to demonstrate E2E (End-to-End) testing capabilities using the Cypress framework.

Project Scope
The objective of this project is to implement and maintain a suite of automated tests for web applications. The repository focuses on functional validation, regression testing, and the application of industry-standard QA methodologies.

Technical Stack
Automation Framework: Cypress 13.0.0 or higher.

Programming Language: JavaScript.

Runtime Environment: Node.js.

Development Environment: Visual Studio Code.

Version Control: Git / GitHub.

Test Case Documentation
Suite: Authentication and User Access.

CT003: Validation of successful authentication and URL parameter persistence.

CT004: Validation of mandatory field constraints for the password input.

CT005: Validation of e-mail input resilience against leading/trailing white spaces (Trim).

CT006: Verification of white space preservation within the password string (Acceptance Criteria).

CT007: Functional validation of navigation flow to the Registration module.

Execution Procedures
Prerequisites: Ensure that the Node.js environment is correctly configured on the local machine.
Installation:

Bash
git clone https://github.com/trindadeluizandre/cypress-lab.git
npm install
Test Execution:

Interactive Mode (Cypress Runner): npx cypress open

Headless Mode (CLI): npx cypress run

Relatório de Execução de Testes - 02/04/2026
Status da Suíte: Passou (100%)
Testes Executados: 05
Falhas: 00

Destaques de QA e Observações Técnicas:
CT005: Validou a resiliência do campo de e-mail contra espaços em branco (trim), garantindo a integridade dos dados enviados ao processamento.

CT006: Confirmou a conformidade com o requisito de negócio que exige a preservação de caracteres de espaço na string de senha para fins de segurança e hashing.

CT007: Validou a integridade do seletor e a transição de estado da aplicação para a rota de cadastro.

Heurística de Usabilidade: Durante a validação manual do fluxo de cadastro (Registration Flow), foi identificada a ausência de um manipulador de estado de sucesso (Success State Handler). O formulário realiza o reset dos campos sem fornecer feedback visual ao usuário, o que pode impactar negativamente a experiência do usuário (UX). Recomenda-se a implementação de um componente de notificação (Toast ou Modal) após o evento de submissão.

Author: Andre Luiz Trindade.
Role: QA Analyst.
Project Status: Active Development.