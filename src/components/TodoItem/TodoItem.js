import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import "./TodoItem.css";

const TodoItem = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div
      className={
        todo.isComplete ? "todo__item todo__item-complete" : "todo__item"
      }
      key={todo.id}
    >
      <div key={todo.id} className="todo__item-task" onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="todo__item-icons">
        <LiaEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="todo__item-edit-btn"
        />
        <RiDeleteBin5Line
          onClick={() => removeTodo(todo.id)}
          className="todo__item-delete-btn"
        />
      </div>
    </div>
  ));
};

export default TodoItem;
