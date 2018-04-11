import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: 0, name: "Rui", age: 19 },
      { id: 1, name: "Tony", age: 16 },
      { id: 2, name: "Andy", age: 26 }
    ],
    toggleShowAndOut: false
  };
  handleToggle = () => {
    this.setState({ toggleShowAndOut: !this.state.toggleShowAndOut });
  };
  handleDel = id => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({ persons });
  };
  handleChangeName = (e, id) => {
    const personsIndex = this.state.persons.findIndex(
      person => person.id === id
    );
    const person = { ...this.state.persons[personsIndex] };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personsIndex] = person;
    this.setState({ persons });
  };
  render() {
    const btnStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#eee",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.toggleShowAndOut) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              age={person.age}
              handeClick={() => this.handleDel(index)}
              changed={e => this.handleChangeName(e, index)}
            />
          ))}
        </div>
      );
      btnStyle.backgroundColor = "red";
      btnStyle[":hover"] = {
        backgroundColor: "#ddd",
        color: "#fff"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(" ")}>I'm already learn React</p>
          <button style={btnStyle} onClick={this.handleToggle}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
