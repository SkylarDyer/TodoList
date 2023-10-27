import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [task, setTask] = useState("");

  const taskRef = useRef(null);
  useEffect(() => {
    taskRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({ id: Math.floor(Math.random() * 10000), text: task });
    setTask("");
    console.log(task);
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const isDisabled = task.trim().length === 0;

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        minLength={2}
        value={task}
        className="todo__form-input"
        placeholder="Add a task"
        onChange={handleChange}
        ref={taskRef}
      />
      <button
        className="todo__form-button-add"
        type="submit"
        disabled={isDisabled}
      >
        +
      </button>
      <div className="todo__form-button-group">
        <button type="button" className="todo__form-button">
          <span>All</span>
        </button>
        <button type="button" className="todo__form-button">
          <span>Active</span>
        </button>
        <button type="button" className="todo__form-button">
          <span>Completed</span>
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
