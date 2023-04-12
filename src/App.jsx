import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
}

const addTask = (taskText) => {
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  setTasks([...tasks, newTask]);
};

return (
  <div>
    <AddTaskForm addTask={addTask} />
    {/* Restante do código */}
  </div>
);

export default App;
