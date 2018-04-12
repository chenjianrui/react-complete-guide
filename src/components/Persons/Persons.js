import React from "react";
import Person from "./Person/Person";

const persons = ({ persons, changed, handleClick }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          handleChangeName={e => changed(e, person.id)}
          clicked={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default persons;
