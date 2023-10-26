import React from "react";
import "./Todo.css";

const Todo = () => {
  return (
    <form className="todo__add">
      <h2 className="todo__title">Add a task:</h2>
      <input
        type="text"
        id="todo-input"
        className="todo__input"
        name="text"
        autoComplete="off"
      ></input>
      <button className="todo__button" type="submit">
        Add
      </button>
      <div>
        <button type="button" className="todo__btn-all">
          <span>All</span>
        </button>
        <button type="button" className="todo__btn-active">
          <span>Active</span>
        </button>
        <button type="button" className="todo__btn-completed">
          <span>Completed</span>
        </button>
      </div>
    </form>
  );
};

export default Todo;
