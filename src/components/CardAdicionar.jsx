import { useState } from "react";
function CardAdicionar({ adicionarTarefa }) {
  const [tarefa, setTarefa] = useState("");

  const handleAdicionar = (evento) => {
    debugger;
    evento.preventDefault();
    if (tarefa != "") {
      adicionarTarefa(tarefa);
      setTarefa("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={handleAdicionar}>Adicionar</button>
    </div>
  );
}

export default CardAdicionar;
