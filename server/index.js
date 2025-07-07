const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Servidor Backend está rodando.');
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});