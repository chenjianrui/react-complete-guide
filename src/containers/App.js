import React, { Component } from "react";
import classes from "./App.css";
// import Person from '../components/Persons/Person/Person'
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
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
    if (this.state.isShowing) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.handleChangeName}
          handleClick={this.handleClickDel}
        />
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          isShowing={this.state.isShowing}
          persons={this.state.persons}
          clicked={this.handleToggle}
        />
        {persons}
      </div>
    );
  }
}

export default App;
