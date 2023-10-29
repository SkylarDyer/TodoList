import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      {props.edit ? (
        <>
          <input
            placeholder="Update item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo__form-input todo__form-edit-input"
          />
          <button onClick={handleSubmit} className="todo__form-button-edit">
            +
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo__form-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo__form-button-add">
            +
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
