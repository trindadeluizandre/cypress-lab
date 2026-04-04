Cypress Automation Laboratory / Laboratório de Automação Cypress
This repository serves as a technical environment for Software Quality Assurance (QA) and Automated Testing development. It is structured to demonstrate E2E (End-to-End) testing capabilities and database integration using the Cypress framework and SQLite.

Project Scope
The objective of this project is to implement and maintain a suite of automated tests for web applications, including back-end data persistence validation. The repository focuses on functional validation, regression testing, and the application of industry-standard QA methodologies, such as Database Seeding and Data Integrity Testing.

Technical Stack
Automation Framework: Cypress 13.0.0 or higher.

Database Engine: SQLite3.

Programming Language: JavaScript (Node.js ES6+).

Reporting: Mochawesome (HTML/JSON visual reports).

Development Environment: Visual Studio Code.

Version Control: Git / GitHub.

Infrastructure and Database Scripts
The project includes automated scripts to manage the test database environment:

setup_db.js: Automates the creation of the database schema and performs data seeding for test users.

check_db.js: A utility script to perform SQL queries and verify data persistence in the local environment.

Test Case Documentation
Suite: Authentication and User Access.

CT003: Validation of successful authentication and URL parameter persistence.

CT004: Validation of mandatory field constraints for the password input.

CT005: Validation of e-mail input resilience against leading/trailing white spaces (Trim).

CT006: Verification of white space preservation within the password string (Acceptance Criteria).

CT007: Functional validation of navigation flow to the Registration module.

DB001: Database integrity check for user record persistence and credential matching.

Laboratório de Automação Cypress / Cypress Automation Laboratory
Este repositório serve como um ambiente técnico para o desenvolvimento de Garantia de Qualidade de Software (QA) e Testes Automatizados. Está estruturado para demonstrar capacidades de teste E2E (ponta a ponta) e integração com banco de dados utilizando o framework Cypress e SQLite.

Escopo do Projeto
O objetivo deste projeto é implementar e manter uma suíte de testes automatizados para aplicações web, incluindo a validação de persistência de dados no back-end. O repositório foca em validação funcional, testes de regressão e aplicação de metodologias de QA padrão da indústria, como Database Seeding e Testes de Integridade de Dados.

Stack Técnica
Framework de Automação: Cypress 13.0.0 ou superior.

Engine de Banco de Dados: SQLite3.

Linguagem de Programação: JavaScript (Node.js ES6+).

Relatórios: Mochawesome (Relatórios visuais em HTML/JSON).

Ambiente de Desenvolvimento: Visual Studio Code.

Controle de Versão: Git / GitHub.

Scripts de Infraestrutura e Banco de Dados
O projeto inclui scripts automatizados para gerenciar o ambiente de banco de dados de teste:

setup_db.js: Automatiza a criação do esquema do banco de dados e realiza o seeding (carga inicial) de usuários de teste.

check_db.js: Script utilitário para realizar consultas SQL e verificar a persistência de dados no ambiente local.

Documentação dos Casos de Teste
Suíte: Autenticação e Acesso do Usuário.

CT003: Validação de autenticação bem-sucedida e persistência de parâmetros de URL.

CT004: Validação de restrições de campos obrigatórios para a senha.

CT005: Validação da resiliência do campo de e-mail contra espaços em branco (Trim).

CT006: Verificação da preservação de espaços em branco na senha (Critério de Aceite).

CT007: Validação funcional do fluxo de navegação para o módulo de Cadastro.

DB001: Verificação de integridade do banco de dados para persistência de registros de usuário e correspondência de credenciais.

Andre Luiz Trindade