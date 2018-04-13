import React, { PureComponent } from "react";
import classes from "./App.css";
// import Person from '../components/Persons/Person/Person'
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 0, name: "Rui", age: 19 },
        { id: 1, name: "Tony", age: 16 },
        { id: 2, name: "Andy", age: 26 }
      ],
      isShowing: false
    };
    console.log("[App.js], Inside Constructor", props);
  }
  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }
  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate");
  }

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
    console.log("[App.js] Inside render()");
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
        <button onClick={() => this.setState({ isShowing: true })}>
          Show Persons
        </button>
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
