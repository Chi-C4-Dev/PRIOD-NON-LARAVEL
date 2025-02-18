const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Servindo arquivos estáticos da pasta 'public'
app.use(express.static("public"));

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
