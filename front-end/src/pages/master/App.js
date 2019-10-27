import React, { useState } from 'react';
import api from '../../services/api';
import './App.css';

import logo from '../../assets/logo.svg';

function App() {
  const [email, SetEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', {
      email
    });

    const { _id } = response.data;
    localStorage.setItem('user', _id);

  }

  return (
    <div className="container">
      <img src={logo} alt="logo" />

      <div className="content">

        <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => SetEmail(event.target.value)} />

          <button className="btn" type="submit" id="entrar">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
