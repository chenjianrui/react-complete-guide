import React from "react";
import "./Person.css";
const person = ({ name, age, handeClick, changed }) => {
  return (
    <div className="Person">
      <p onClick={handeClick}>
        My name is {name}, and I'm {age} ages.
      </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
