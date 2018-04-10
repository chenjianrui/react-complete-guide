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

  switchNameHandle = name => {
    this.setState({
      persons: [
        { id: 0, name: "Hello", age: 119 },
        { id: 1, name: name, age: 116 },
        { id: 2, name: "React", age: 126 }
      ]
    });
  };
  handleChangeName = e => {
    this.setState({
      persons: [
        { id: 0, name: e.target.value, age: 119 },
        { id: 1, name: e.target.value, age: 116 },
        { id: 2, name: e.target.value, age: 126 }
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
        <button style={btnStyle} onClick={() => this.switchNameHandle("Node")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changeName={this.handleChangeName}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandle.bind(this, "JavaScript")}
          changeName={this.handleChangeName}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changeName={this.handleChangeName}
        />
      </div>
    );
  }
}

export default App;
