import React, { useState } from "react";

function ListItem({ tarefa, removerTarefa }) {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);

  function finalizarTarefa() {
    setFinalizado(true);
  }

  function handleRemover() {
    removerTarefa(tarefa);
  }

  return (
    <li style={finalizado ? { textDecoration: "line-through" } : {}}>
      {tarefa.texto} <button onClick={finalizarTarefa}>Finalizar</button>
      <button onClick={handleRemover}>Remover</button>
    </li>
  );
}

export default ListItem;
