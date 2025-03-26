import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./redux/todoSlice";
import { removeTask } from "./redux/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.tasks);

  useEffect(() => {

  }, []);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <button onClick={() => handleAddTask({ id: Date.now(), text: "Nueva Tarea" })}>
        Agregar tarea
      </button>
      <ul>
        {task.map((taskItem) => ( 
          <li key={taskItem.id}>
            {taskItem.text}{" "}
            <button onClick={() => handleRemoveTask(taskItem.id)}>Eliminar Tarea</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
