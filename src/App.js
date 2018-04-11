import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 0, name: "Rui", age: 19 },
      { id: 1, name: "Tony", age: 16 },
      { id: 2, name: "Andy", age: 26 }
    ]
  };
  render() {
    const btnStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {this.state.persons.map((person, index) => (
          <Person key={index} id={index} name={person.name} age={person.age} />
        ))}
      </div>
    );
  }
}

export default App;
