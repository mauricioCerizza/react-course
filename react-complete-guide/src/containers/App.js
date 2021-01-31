import { React, Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Auxiliary";
import AuthContext from "../context/auth-context";

class App extends Component {
  // Inicializa el estado
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");

    this.state = {
      persons: [
        { id: 1, name: "Max", age: 29 },
        { id: 2, name: "Mauri", age: 28 },
        { id: 3, name: "Maru", age: 30 },
      ],
      showPersons: false,
      changeCounter: 0,
      authenticated: false
    };
  }

  // Sincroniza el estado basado en las propiedades recibidas.
  // Se ejecuta frente a cada cambio de estado.
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // Se usa por temas de performance.
  // Posibilita prevenir actualizaciones innecesarias.
  // Se ejecuta frente a cada cambio de estado.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

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

    // prevState permite acceder al estado ANTERIOR
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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

  loginHandler = () =>
  {
    this.setState({authenticated: true});
  };

  // Prepara y estructura el codigo JSX para ser mostrado
  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        ></Persons>
      );
    }

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            persons={this.state.persons}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }

  // Devuelve una instantanea de las propiedades antes del cambio.
  // Sirve para guardar ciertos datos antes de que se concrete la actualización.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  // Se acciona una vez que terminó de renderizar
  // Se puede usar, por ejemplo, para invocar algún servicio web.
  // NO cambiar el estado acá.
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  // Se acciona una vez que se actualizó el componente.
  // NO cambiar el estado acá.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
    console.log(snapshot);
  }

  // Se ejecuta justo antes de que se destruya el componente.
  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount");
  }
}

export default withClass(App, classes.App);
