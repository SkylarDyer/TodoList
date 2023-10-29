import React, { useState, useCallback } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import FilterButton from "../FilterButton/FilterButton";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.isComplete,
    Completed: (todo) => todo.isComplete,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const addTodo = useCallback(
    (todo) => {
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
    },
    [todos]
  );

  const editTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
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

  const todoList = todos
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        isComplete={todo.isComplete}
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    ));

  return (
    <div className="todo__list">
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <div className="filter__button-group">{filterList}</div>
      {todoList}
    </div>
  );
}

export default TodoList;
