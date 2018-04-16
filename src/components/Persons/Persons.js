import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside constructor()", props);
  }
  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[PUDATE Persons.js] Inside componentWillReceiveProps",
      nextProps
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE Persons.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }
  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate");
  }
  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => (
      <Person
        position={index}
        key={index}
        name={person.name}
        age={person.age}
        handleChangeName={e => this.props.changed(e, person.id)}
        clicked={() => this.props.handleClick(index)}
      />
    ));
  }
}

export default Persons;
