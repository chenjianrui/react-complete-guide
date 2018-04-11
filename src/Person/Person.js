import React from "react";
import "./Person.css";
const person = ({ name, age, id }) => {
  return (
    <div className="Person" id={id}>
      <p>
        My name is {name}, and age is {age}
      </p>
      <input type="text" />
    </div>
  );
};

export default person;
