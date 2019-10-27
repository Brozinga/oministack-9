import React, { useState } from "react";

import api from "../../services/api";

export default function Login({ history }) {
  const [email, SetEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", {
      email
    });

    const { _id } = response.data;
    sessionStorage.setItem("user", _id);
    history.push("/dashboard");
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para a sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => SetEmail(event.target.value)}
        />

        <button className="btn" type="submit" id="entrar">
          Entrar
        </button>
      </form>
    </>
  );
}
