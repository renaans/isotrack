import React from 'react';
export default function Sidebar({ setPage }) {
  return (
    <div style={{ width: '200px', background: '#111', color: '#fff', padding: '1rem' }}>
      <h2>ISOTrack</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li onClick={() => setPage('processos')} style={{ cursor: 'pointer' }}>Processos</li>
        <li onClick={() => setPage('documentos')} style={{ cursor: 'pointer' }}>Documentos</li>
      </ul>
    </div>
  );
}
