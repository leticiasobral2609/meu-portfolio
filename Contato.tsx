"use client";

import { useState } from "react";
import { enviarMensagem } from "../serviços/contato";


export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      await enviarMensagem(nome, email, mensagem);

      setNome("");
      setEmail("");
      setMensagem("");
      setStatus("Mensagem enviada com sucesso!");

    } catch (erro) {
      console.error(erro);
      setStatus("Não foi possível enviar. Tente novamente.");
    }
  }

  return (
    <section
      style={{
        background: "pink",
        padding: "30px",
        margin: "30px",
        color: "black"
      }}
    >
      <h1>TESTE DE CONTATO</h1>

      <form onSubmit={enviar}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>

      <p>{status}</p>
    </section>
  );
}



