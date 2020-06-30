import React, { useState } from "react";

function App() {
  const [newTask, AddNewTask] = useState("");
  const [itemsArray, AddItem] = useState([]);
  function handleChange(event) {
    var latestErrand = event.target.value;
    AddNewTask(latestErrand);
  }
  function handleClick() {
    AddItem(prevValue => {
      return [...prevValue, newTask];
    });
    AddNewTask("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newTask} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArray.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
