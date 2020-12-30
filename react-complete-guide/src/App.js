import { React, Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";

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
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };


  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )  
    }

    return (
      <div className="App">
        <h1>HI WORLD!!</h1>
        <p>This is really working!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Person
        </button>
        {persons}
      </div>
    );

    //return React.createElement('div', {className: App}, React.createElement('h1', null, 'Hi World!'));
  }
}

/* const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Mauri', age: 28 },
      { name: 'Maru', age: 30 }
    ],
    otherState: 'otro valor'
  });

  const switchNameHandler = () => {
    setPersonsState ({
      persons: [
        { name: 'Max', age: 30 },
        { name: 'Mauri', age: 28 },
        { name: 'Maru', age: 31 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>HI WORLD!!</h1>
      <p>This is really working!!</p>
      <button onClick={switchNameHandler}>Switch Person</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
    </div>
  ); 
} */

export default App;
