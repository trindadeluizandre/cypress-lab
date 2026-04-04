const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./lab_qa.db');

db.serialize(() => {
    // Criando a tabela de usuários
    db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, senha TEXT)");

    // Inserindo o dado do seu teste de ontem
    const stmt = db.prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
    stmt.run("Andre Luiz", "andre@teste.com", "123456");
    stmt.finalize();

    console.log("Sucesso! O arquivo lab_qa.db foi criado com os dados de teste.");
});

db.close();