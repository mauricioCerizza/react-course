import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/WithClass";
import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  // Nos permite acceder a nuestro context desde cualquier parte. 
  static contextType = AuthContext;

  render() {
    return (
      <Aux>
          {
            this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
        ></input>
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
