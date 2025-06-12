import React, { useState } from 'react';
export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleLogin = () => {
    if (email === 'admin@isotrack.com' && senha === '123456') onLogin();
    else alert('Login inválido');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Login ISOTrack</h2>
      <input type='text' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
