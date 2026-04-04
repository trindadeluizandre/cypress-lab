const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./lab_qa.db');

// Esta linha faz a PERGUNTA ao banco de dados (o SELECT)
db.all("SELECT * FROM usuarios", [], (err, rows) => {
    if (err) {
        console.error("Erro ao ler o banco:", err.message);
        return;
    }
    console.log("--- Dados Encontrados no Banco ---");
    console.table(rows); // Isso vai desenhar a tabela no seu terminal
});

db.close();