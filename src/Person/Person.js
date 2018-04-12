import React from "react";
import classes from "./Person.css";
const person = ({ name, age, handleClick, changed }) => {
  return (
    <div className={classes.Person}>
      <p onClick={handleClick}>
        My name is {name}, and I'm {age} ages.
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
