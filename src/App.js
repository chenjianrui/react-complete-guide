import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 0, name: "Rui", age: 19 },
      { id: 1, name: "Tony", age: 16 },
      { id: 2, name: "Andy", age: 26 }
    ],
    isShowing: false
  };
  handleToggle = () => {
    let isShowing = this.state.isShowing;
    this.setState({ isShowing: !isShowing });
  };
  handleChangeName = (e, id) => {
    const personsIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personsIndex] };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personsIndex] = person;
    this.setState({ persons });
  };
  handleClickDel = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };
  render() {
    let persons = null;
    let btnClick = "";
    if (this.state.isShowing) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              age={person.age}
              handleClick={() => this.handleClickDel(index)}
              changed={e => this.handleChangeName(e, person.id)}
            />
          ))}
        </div>
      );
      btnClick = classes.red;
    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>I'm already learn React</p>
        <button className={btnClick} onClick={this.handleToggle}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
