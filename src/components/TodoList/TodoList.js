import React, { useState, useCallback, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import FilterButton from "../FilterButton/FilterButton";

const getInitialState = () => {
  const data = window.localStorage.getItem("TODO-ITEM");
  return data ? JSON.parse(data) : [];
};

function TodoList() {
  const [todos, setTodos] = useState(getInitialState);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    window.localStorage.setItem("TODO-ITEM", JSON.stringify(todos));
  }, [todos]);

  

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
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filterMap = {
    All: () => true,
    Active: (todo) => !todo.isComplete,
    Completed: (todo) => todo.isComplete,
  };

  const filterNames = Object.keys(filterMap);

  const filteredList = filterNames.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const todoItemFilter = todos
    .filter(filterMap[filter])
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
  // console.log(filterMap);

  return (
    <div className="todo__list">
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <div className="filter__button-group">{filteredList}</div>
      {todoItemFilter}
    </div>
  );
}

export default TodoList;
