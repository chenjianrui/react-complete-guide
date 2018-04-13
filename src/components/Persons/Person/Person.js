import React, { Component } from "react";
import classes from "./Person.css";
/*
const person = ({ name, age, id, handleChangeName, clicked }) => {
  return (
    <div className={classes.Person}>
      <p onClick={clicked}>
        My name is {name}, and I'm {age} ages old.
      </p>
      <input type="text" onChange={handleChangeName} value={name} />
    </div>
  );
};
export default person;
*/

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor()", props);
  }
  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }
  render() {
    console.log("[Person.js] Inside render()");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.clicked}>
          My name is {this.props.name}, and I'm {this.props.age} ages old.
        </p>
        <input
          type="text"
          onChange={this.props.handleChangeName}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
