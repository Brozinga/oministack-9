import React, { useState, useMemo } from "react";
import camera from "../../assets/camera.svg";

import api from "../../services/api";

import "./new.scss";
export default function New({ history }) {
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [techs, setTechs] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    const user_id = sessionStorage.getItem("user");

    await api.post("/spots", data, {
      headers: { user_id }
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        className={preview ? "has-thumbnail" : ""}
        style={{ backgroundImage: `url(${preview})` }}
      >
        <input
          type="file"
          onChange={event => setThumbnail(event.target.files[0])}
        />
        {preview ? "" : <img src={camera} alt="Imagem de camera" />}
      </label>

      <label htmlFor="company">EMPRESAS *</label>
      <input
        id="company"
        type="text"
        placeholder="Sua empresa incrível"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor="techs">
        TECNOLOGIAS * <span>(Separadas por Virgula)</span>
      </label>
      <input
        id="techs"
        type="text"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor="price">
        VALOR DA DIÁRIA * <span>(Em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        type="text"
        placeholder="Valor cobrado por dia?"
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button type="submit" className="btn">
        Cadastrar
      </button>
    </form>
  );
}
