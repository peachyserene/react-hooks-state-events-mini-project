import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newName, setNewName] = useState("");
  const [newCat, setNewCat] = useState("Code");

  let catOptions = categories.map((item) => {
    return item !== "All" ? <option key={item}>{item}</option> : null;
  });
  function handleFormSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text: newName, category: newCat });
  }
  function handleNameChange(e) {
    setNewName(e.target.value);
  }
  function handleCatChange(e) {
    console.log(e.target.value);
    setNewCat(e.target.value);
  }
  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={newCat} onChange={handleCatChange}>
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
