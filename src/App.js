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
  handleChangeName = e => {
    console.log(e.target.value);
    this.setState({
      persons: [
        { id: 0, name: e.target.value, age: 19 },
        { id: 1, name: "Tony", age: 16 },
        { id: 2, name: "Andy", age: 26 }
      ]
    });
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
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          id={this.state.persons[0].id}
          handleChangeName={this.handleChangeName}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          id={this.state.persons[1].id}
          handleChangeName={this.handleChangeName}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          id={this.state.persons[2].id}
          handleChangeName={this.handleChangeName}
        />
      </div>
    );
  }
}

export default App;
