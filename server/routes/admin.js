const express = require('express');
const sql = require('mssql');
const router = express.Router();

router.post('/cancelar', async (req, res) => {
  const { whatsapp, dataHora } = req.body;
  const agora = new Date();
  const agendamento = new Date(dataHora);
  const diff = (agendamento - agora) / (1000 * 60 * 60);

  if (diff < 72) {
    return res.status(400).json({ message: 'Cancelamento só é permitido até 72h antes.' });
  }

  try {
    const result = await sql.query`UPDATE Agendamentos SET Cancelado = 1 WHERE WhatsApp = ${whatsapp} AND DataHora = ${dataHora}`;
    if (result.rowsAffected[0] > 0) {
      res.json({ message: 'Agendamento cancelado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Agendamento não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/listar', async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Agendamentos ORDER BY DataHora DESC`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
