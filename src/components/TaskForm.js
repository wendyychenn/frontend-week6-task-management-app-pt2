import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { InventoryContext } from "../data/InventoryContext";

export default function TaskForm() {
  const { addTask, setEditing, updateTask, editing, tasks } = useContext(
    InventoryContext
  );

  // check if value of editing is "new" or some id of a task
  let initialData = {
    name: ""
  };

  if (editing !== "new") {
    initialData = tasks.find(function (t) {
      return t.id === editing;
    });
  }

  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addTask({
        ...task,
        id: nanoid()
      });
    } else {
      updateTask(task);
    }
  }

  function handleInput(e, field) {
    setTask({ ...task, [field]: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={task.name}
            onChange={(e) => handleInput(e, "name")}
          />
          <button className="add-btn">Add</button>
        </div>
      </form>
    </div>
  );
}
