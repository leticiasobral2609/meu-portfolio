
"use client";

import { useState } from "react";
import styles from "./Cartao.module.css";

type CartaoProps = {
  titulo: string;
  descricao: string;
  tecnologias: string[];
};

export default function Cartao({
  titulo,
  descricao,
  tecnologias,
}: CartaoProps) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <article className={styles.cartao}>
      <h2>{titulo}</h2>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ver menos" : "Ver detalhes"}
      </button>

      {mostrar && <p>{descricao}</p>}

      <ul>
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
    </article>
  );
}
