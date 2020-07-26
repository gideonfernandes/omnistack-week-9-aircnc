import React from 'react';

import './App.css';
import logo from './assets/logo.svg';
import Routes from './routes';

const App = () => {
  return (
    <div className="container">
      <img src={logo} alt="Logo AirCnC"/>
      <main className="content">
        <Routes />
      </main>
    </div>
  );
};

export default App;
