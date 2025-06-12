
import React, { useState } from 'react';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Processos from './Processos';
import Documentos from './Documentos';

export default function App() {
  const [logged, setLogged] = useState(false);
  const [page, setPage] = useState('processos');

  if (!logged) return <Login onLogin={() => setLogged(true)} />;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar setPage={setPage} />
      <div style={{ flex: 1, padding: '2rem' }}>
        {page === 'processos' && <Processos />}
        {page === 'documentos' && <Documentos />}
      </div>
    </div>
  );
}
