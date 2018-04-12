import React from "react";
import classes from "./Person.css";
const person = ({ name, age, clicked, handleChangeName }) => {
  return (
    <div className={classes.Person}>
      <p onClick={clicked}>
        My name is {name}, and I'm {age} ages.
      </p>
      <input type="text" onChange={handleChangeName} value={name} />
    </div>
  );
};

export default person;
