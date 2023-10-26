import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, ]);
    console.log(todos);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        <TodoList task={todo} key={index} />;
      })}
    </div>
  );
};

export default TodoWrapper;
