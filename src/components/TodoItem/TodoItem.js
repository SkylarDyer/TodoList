import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoItem.css";
function TodoItem({ todos, completeTodo, deleteTodo, editTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete ? "todo__item todo__item-complete" : "todo__item"
      }
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="todo__item-icons">
        <LiaEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="todo__item-edit-btn"
        />
        <RiDeleteBin5Line
          onClick={() => deleteTodo(todo.id)}
          className="todo__item-delete-btn"
        />
      </div>
    </div>
  ));
}
export default TodoItem;
