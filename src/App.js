import React, { Component } from "react";
import "./App.css";
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
      console.log(person, id);
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
    console.log(this.state.persons);
  };
  render() {
    const btnStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;
    if (this.state.isShowing) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={index}
              name={person.name}
              age={person.age}
              handleClick={() => this.handleClickDel(person.id)}
              changed={e => this.handleChangeName(e, person.id)}
            />
          ))}
        </div>
      );
    }
    btnStyle.backgroundColor = "red";
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>I'm already learn React</p>
        <button style={btnStyle} onClick={this.handleToggle}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
