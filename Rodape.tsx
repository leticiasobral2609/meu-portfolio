"use client";

import { useEffect, useState } from "react";

export default function Rodape() {
  const [ano, setAno] = useState<number | null>(null);

  useEffect(() => {
    setAno(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <p>
        Desenvolvido por Leticia Gabrielly - {ano ?? "2026"}
      </p>
    </footer>
  );
}