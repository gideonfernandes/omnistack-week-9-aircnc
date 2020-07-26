import React, { useState } from 'react';
import api from './services/api';

import './App.css';
import logo from './assets/logo.svg';

const App = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    const response = await api.post('/auths', { email });
    
    const { _id } = response.data;

    localStorage.setItem('user_id', _id);
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo AirCnC"/>
      <main className="content">
        <h1>
          Ofereça <strong>spots</strong> para programadores
          e encontre <strong>talentos</strong> para sua empresa
        </h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">EMAIL *</label>
          <input
            type="email" 
            name="email"
            placeholder="Seu melhor e-mail"
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </main>
    </div>
  );
};

export default App;
