import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask("");
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        className="todo__input"
        placeholder="What's up?"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button className="btn todo__button" type="submit">
        Add
      </button>
      <div className="todo__button-group">
        <button type="button" className="btn list__button todo__btn-all">
          <span>All</span>
        </button>
        <button type="button" className="btn list__button todo__btn-active">
          <span>Active</span>
        </button>
        <button type="button" className="btn list__button todo__btn-completed">
          <span>Completed</span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
