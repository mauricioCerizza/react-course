import { React, Component } from "react";
import classes from "./App.module.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 29 },
      { id: 2, name: "Mauri", age: 28 },
      { id: 3, name: "Maru", age: 30 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Mauri", age: 28 },
        { name: "Maru", age: 31 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let showPersonsText = "Show Persons";
    let buttonClass = [classes.Button];

    let persons = null;

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if (this.state.showPersons) {
      showPersonsText = "Hide Persons";
      buttonClass.push(classes.Red);

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary>
                key={person.id}
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <h1>HI WORLD!!</h1>
        <p className={assignedClasses.join(" ")}>This is really working!!</p>
        <button
          className={buttonClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          {showPersonsText}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
