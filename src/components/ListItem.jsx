import React, { useState } from "react";

function ListItem({ tarefa }) {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);

  function finalizarTarefa() {
    setFinalizado(true);
  }

  return (
    <li style={finalizado ? { textDecoration: "line-through" } : {}}>
      {tarefa.texto}{" "}
      {!finalizado && <button onClick={finalizarTarefa}>Finalizar</button>}
    </li>
  );
}

export default ListItem;
