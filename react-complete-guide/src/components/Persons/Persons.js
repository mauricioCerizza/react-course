import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import Person from "./Person/Person";

// PureComponent es equivalente a implemente shouldComponentUpdate para todas las propiedades.
class Persons extends PureComponent {
/*   shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
      ) {
      return true;
    }
    return false;
  }
 */

  
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Persons;
