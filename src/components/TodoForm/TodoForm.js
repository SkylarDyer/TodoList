import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [descriptionInput, setdescriptionInput] = useState(
    props.edit ? props.edit.value : ""
  );
  const [titleInput, setTitleInput] = useState(
    props.edit ? props.edit.value : ""
  );

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleTitleChange = (e) => {
    setTitleInput(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setdescriptionInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: titleInput,
      text: descriptionInput,
    });
    setTitleInput("");
    setdescriptionInput("");
  };

  return (
    <form className="todo__form">
      {props.edit ? (
        <div>
          <input
            placeholder="Update title"
            value={titleInput}
            onChange={handleTitleChange}
            name="title"
            // ref={inputRef}
            className="todo__form-input todo__form-edit-input"
          />

          <input
            placeholder="Update description"
            value={descriptionInput}
            onChange={handleDescriptionChange}
            name="text"
            // ref={inputRef}
            className="todo__form-input todo__form-edit-input"
          />
          <button
            onClick={handleSubmit}
            className="todo__form-button-add todo__form-button-edit"
          >
            +
          </button>
        </div>
      ) : (
        <>
          <input
            placeholder="Add a title"
            value={titleInput}
            onChange={handleTitleChange}
            name="title"
            className="todo__form-input"
            // ref={inputRef}
          />
          <input
            placeholder="Add a description"
            value={descriptionInput}
            onChange={handleDescriptionChange}
            name="text"
            className="todo__form-input"
            // ref={inputRef}
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
