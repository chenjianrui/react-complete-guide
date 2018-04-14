import React from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const cockpit = ({ isShowing, persons, clicked }) => {
  const assignedClasses = [];
  let btnClick = classes.Button;
  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (isShowing) {
    btnClick = [classes.Button, classes.red].join(" ");
  }
  return (
    <Aux>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>I'm already learn React</p>
      <button className={btnClick} onClick={clicked}>
        Switch Name
      </button>
    </Aux>
  );
};

export default cockpit;
