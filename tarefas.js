import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../lib/firebase";

const colecao = collection(db, "tarefas");

// Criar tarefa

export async function criarTarefa(texto) {
  const limpo = texto.trim();

  if (!limpo) {
    throw new Error("Escreva a tarefa.");
  }

  if (limpo.length > 200) {
    throw new Error("Máximo de 200 letras.");
  }

  await addDoc(colecao, {
    texto: limpo,
    concluida: false,
    criadaEm: serverTimestamp(),
  });
}



// Listar tarefas
export async function listarTarefas() {
  const resultado = await getDocs(colecao);

  return resultado.docs.map((documento) => ({
    id: documento.id,
    ...documento.data(),
  }));
}

// Concluir ou desfazer tarefa
export async function concluirTarefa(id, concluida) {
  const referencia = doc(db, "tarefas", id);

  await updateDoc(referencia, {
    concluida: !concluida,
  });
}

// Remover tarefa
export async function removerTarefa(id) {
  const referencia = doc(db, "tarefas", id);

  await deleteDoc(referencia);
}