import React from "react";
import "./Person.css";
import Radium from "radium";
const person = ({ name, age, handleClick, changed }) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "500px",
      boxSizing: "border-box"
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={handleClick}>
        My name is {name}, and I'm {age} ages.
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Radium(person);
