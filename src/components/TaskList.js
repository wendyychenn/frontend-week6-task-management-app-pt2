import { useContext, useState } from "react";
import Task from "./Task";
import { InventoryContext } from "../data/InventoryContext";
import { sort } from "../utils/helpers";

export default function TaskList() {
  const { tasks } = useContext(InventoryContext);

  // local state for tracking filter and sorting selections
  const [sortOrder, setSortOrder] = useState("");

  let displayedTasks = sort(tasks, sortOrder);

  return (
    <>
      <div>
        {displayedTasks.map((t) => (
          <Task task={t} />
        ))}
      </div>
    </>
  );
}
