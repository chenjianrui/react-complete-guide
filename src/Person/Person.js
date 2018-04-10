import React from "react";
import "./Person.css";
const person = ({ name, age, click, changeName }) => {
  // this.handleId = e => {
  //   console.log(e);
  // };
  return (
    <div className="Person">
      <p onClick={click}>
        My name is {name}, and my age is {age}
      </p>
      <input type="text" onChange={changeName} value={name} />
    </div>
  );
};

export default person;
