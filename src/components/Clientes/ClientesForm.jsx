import React, { useState } from "react";
import axios from "axios";

const ClientesForm = () => {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim()) {
      alert("Nome é obrigatório!");
      return;
    }
    axios
      .post("https://sua-url-ngrok.ngrok.io/clientes", { nome })
      .then(() => alert("Cliente adicionado com sucesso!"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Cliente</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do cliente"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ClientesForm;
