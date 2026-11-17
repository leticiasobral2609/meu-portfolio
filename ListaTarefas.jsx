
import TarefaItem from "./TarefaItem";

export default function ListaTarefas({
  tarefas,
  carregando,
  concluir,
  remover
}) {
  return (
    <ul className="lista-tarefas">
      {carregando ? (
        <li className="vazio">Carregando tarefas...</li>
      ) : tarefas.length === 0 ? (
        <li className="vazio">
          Suas tarefas aparecerão aqui 💜
        </li>
      ) : (
        tarefas.map((t) => (
          <TarefaItem
            key={t.id}
            tarefa={t}
            concluir={concluir}
            remover={remover}
          />
        ))
      )}
    </ul>
  );
}
