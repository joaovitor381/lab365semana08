import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";
import ListItem from "./components/ListItem";

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([
    { id: 1, texto: "Tarefa 1", finalizado: false },
  ]);

  function adicionarTarefa(tarefa) {
    debugger;
    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto: tarefa,
      finalizado: false,
    };

    const novaListaGeral = [...listaDeTarefas];
    novaListaGeral.push(novaTarefa);

    setListaDeTarefas(novaListaGeral);
  }

  function removerTarefa(tarefaParaRemover) {
    const novaListaGeral = listaDeTarefas.filter(
      (tarefa) => tarefa.id !== tarefaParaRemover.id
    );
    setListaDeTarefas(novaListaGeral);
  }

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      <ul>
        {listaDeTarefas.map((tarefa) => (
          <ListItem
            key={tarefa.id}
            tarefa={tarefa}
            removerTarefa={removerTarefa}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
