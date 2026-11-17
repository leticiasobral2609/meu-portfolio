import type { ReactNode } from "react";

type SecaoProps = {
  titulo: string;
  children: ReactNode;
};

export default function Secao({ titulo, children }: SecaoProps) {
  return (
    <section>
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}