import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo AirCnC"/>
      <main className="content">
        <h1>
          Ofereça <strong>spots</strong> para programadores
          e encontre <strong>talentos</strong> para sua empresa
        </h1>

        <form>
          <label htmlFor="email">EMAIL *</label>
          <input type="email" name="email" placeholder="Seu melhor e-mail" />
          <button type="submit" className="btn">Cadastrar</button>
        </form>
      </main>
    </div>
  );
};

export default App;
