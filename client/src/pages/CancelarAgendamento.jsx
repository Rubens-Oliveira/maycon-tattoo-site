import React, { useState } from 'react';

export default function CancelarAgendamento() {
  const [whatsapp, setWhatsapp] = useState('');
  const [dataHora, setDataHora] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/cancelar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ whatsapp, dataHora })
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-2">Cancelar Agendamento</h1>
      <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} className="border p-2" />
      <input type="datetime-local" value={dataHora} onChange={e => setDataHora(e.target.value)} className="border p-2" />
      <button type="submit" className="bg-red-600 text-white p-2">Cancelar</button>
    </form>
  );
}
