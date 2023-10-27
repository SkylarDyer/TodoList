import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo);
  };

  const editTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const deleteTodo = (id) => {
    const deleteArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(deleteArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="todo__list">
      <h1>What's the task?</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoItem
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
    // <div className="list">
    //   <p>{task.task}</p>
    //   <div>
    //     <button>Edit</button>
    //     <button>Delete</button>
    //   </div>
    // </div>
  );
}

export default TodoList;
