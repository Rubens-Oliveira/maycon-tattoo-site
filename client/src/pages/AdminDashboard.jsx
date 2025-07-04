import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/listar')
      .then(res => res.json())
      .then(data => setAgendamentos(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Administração de Agendamentos</h1>
      <table className="w-full border-collapse">
        <thead><tr className="bg-gray-200"><th>Nome</th><th>WhatsApp</th><th>Data</th><th>Tatuagem</th><th>Cancelado</th></tr></thead>
        <tbody>
          {agendamentos.map((a, i) => (
            <tr key={i} className="border">
              <td>{a.Nome}</td>
              <td>{a.WhatsApp}</td>
              <td>{new Date(a.DataHora).toLocaleString()}</td>
              <td>{a.Tatuagem}</td>
              <td>{a.Cancelado ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
