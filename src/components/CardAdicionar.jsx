import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

return (
  <div>
    <input
      placeholder="adicionar tarefa"
      type="text"
      value={taskText}
      onChange={handleInputChange}
    />
    <button onClick={handleAddTask}>Adicionar Tarefa</button>
  </div>
);
