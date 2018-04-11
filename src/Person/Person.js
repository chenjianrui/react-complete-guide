import React from "react";
import "./Person.css";
const person = ({ name, age, id, handleChangeName }) => {
  return (
    <div className="Person">
      <p>
        My name is {name}, and age is {age}
      </p>
      <input type="text" onChange={handleChangeName} />
    </div>
  );
};

export default person;
