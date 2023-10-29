import React from "react";
import "./FilterButton.css";

function FilterButton(props) {
  const handleFilterClick = () => {
    props.setFilter(props.name);
  };
  return (
    <button
      type="button"
      className="filter__button"
      onClick={handleFilterClick}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;
