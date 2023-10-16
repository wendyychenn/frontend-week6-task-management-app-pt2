import { useContext } from "react";

import { InventoryContext } from "../data/InventoryContext";

export default function Task({ task }) {
  const { deleteTask, setEditing, updateTask } = useContext(InventoryContext);

  function handleCheckbox() {
    updateTask({
      ...task,
      done: !task.done
    });
  }

  return (
    <div className="task">
      <div className="task-details">
        <p>
          <span>
            <input
              type="checkbox"
              checked={task.done}
              onChange={handleCheckbox}
            />
            {task.done ? <del>{task.name}</del> : task.name}
          </span>
        </p>
      </div>
      <div>
        <button className="edit-btn" onClick={() => setEditing(task.id)}>
          edit
        </button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          remove
        </button>
      </div>
    </div>
  );
}
