import React from "react";
import "./Header.css";

const Header = () => {
  return (
    // add name functionality
    <header className="header">
      <h1 className="header__title">Todo List </h1>
      <h2 className="header__subtitle">Add a task:</h2>
    </header>
  );
};

export default Header;
