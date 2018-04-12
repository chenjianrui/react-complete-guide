import React from "react";
import classes from "./Cockpit.css";
const cockpit = ({ isShowing, persons, clicked }) => {
  const assignedClasses = [];
  let btnClick = "";
  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  if (isShowing) {
    btnClick = classes.red;
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>I'm already learn React</p>
      <button className={btnClick} onClick={clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
