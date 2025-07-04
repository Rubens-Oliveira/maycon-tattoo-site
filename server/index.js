const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const app = express();

const agendamentoRoutes = require('./routes/agendamento');
const adminRoutes = require('./routes/admin');

const config = {
  user: 'seu_usuario',
  password: 'sua_senha',
  server: 'localhost',
  database: 'MayconTattoo',
  options: { trustServerCertificate: true }
};

sql.connect(config).then(() => console.log('Conectado ao SQL Server')).catch(err => console.error(err));

app.use(cors());
app.use(express.json());
app.use('/', agendamentoRoutes);
app.use('/', adminRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
