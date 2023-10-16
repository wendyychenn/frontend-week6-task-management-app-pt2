import { useState } from "react";
import "./styles.css";

import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

import { InventoryContext } from "./data/InventoryContext";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editing, setEditing] = useState(null);

  function addTask(task) {
    setTasks([...tasks, task]);

    setEditing(null);
  }

  function updateTask(task) {
    setTasks(
      tasks.map(function (t) {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
    // remove the form after creating task
    setEditing(null);
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter(function (t) {
        return t.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <InventoryContext.Provider
        value={{
          tasks,
          addTask,
          deleteTask,
          updateTask,
          setEditing,
          editing
        }}
      >
        <h2>Task Management App</h2>
        {!editing ? (
          <>
            <TaskList />
            <button
              className="save-btn add-btn"
              onClick={() => setEditing("new")}
            >
              Add Task
            </button>
          </>
        ) : (
          <TaskForm />
        )}
      </InventoryContext.Provider>
    </div>
  );
}

const initialTasks = [];
