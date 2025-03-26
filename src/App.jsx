import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./redux/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText("");
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Escribe una tarea" 
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {tasks.map((taskItem) => (
          <li key={taskItem.id}>
            {taskItem.text}
            <button onClick={() => handleRemoveTask(taskItem.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
