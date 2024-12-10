import React, { useState } from "react";
import axios from "axios";

const ProdutosForm = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim()) {
      alert("O nome é obrigatório!");
      return;
    }

    if (preco <= 0) {
      alert("O preço deve ser maior que zero!");
      return;
    }

    axios
      .post("https://sua-url-ngrok.ngrok.io/produtos", { nome, preco })
      .then(() => alert("Produto adicionado com sucesso!"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Produto</h2>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ProdutosForm;
