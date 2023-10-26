import React from "react";
import "./TodoList.css";
const TodoList = ({task}) => {
  return (
    <div className="list">
      <p>{task.task}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoList;
