import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [newTaskList, setNewTaskList] = useState(TASKS);
  const [selectedCat, setSelectedCat] = useState("All");
  // const [newTaskItem, setNewTaskItem] = useState([]);

  //removes item from list when delete button is clicked
  function handleDelete(text) {
    console.log(text);
    setNewTaskList(
      newTaskList.filter((item) => {
        return item.text !== text;
      })
    );
  }
  //creates a new list with the added task
  function updateTasksList(task) {
    setNewTaskList([...newTaskList, task]);
  }

  //filters out the tasks that dont match the selected category
  let visibleTasks = newTaskList.filter((item) => {
    if (selectedCat === "All") {
      return true;
    }
    return item.category === selectedCat;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setSelectedCat={setSelectedCat}
        selectedCat={selectedCat}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={updateTasksList} />
      <TaskList tasks={visibleTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
