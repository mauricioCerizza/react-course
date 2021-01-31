import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  // Se ejecuta en cada ciclo de renderizado.
  // Combina componentDidMount y componentDidUpdate
  // Es un "react hook"
  useEffect(() => {
    console.log("[Cockpit.js] Use effect");
    toggleBtnRef.current.click();

    return () => {
      // Se puede retornar esta función se ejecutará
      // justo después de cada ciclo de renderizado.
      console.log("[Cockpit.js] Cleaning work in useEffect");
    };
  }, []);
  // se puede agregar un segundo argumento que es un array
  // y permite agregar las propiedades sobre las que queremos hacer seguimiento,
  // y solo se ejecutara cuando esas propiedades cambien.
  // Si le pasamos un array vacio, correrá la primera vez y nunca más.
  // Se puede tener tantos useEffect como se necesite.

  let showPersonsText = "Show Persons";
  let buttonClass = [classes.Button];

  const assignedClasses = [];

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  if (props.showPersons) {
    showPersonsText = "Hide Persons";
    buttonClass.push(classes.Red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>HI WORLD!!</h1>
      <p className={assignedClasses.join(" ")}>This is really working!!</p>
      <button
        ref={toggleBtnRef}
        className={buttonClass.join(" ")}
        onClick={props.clicked}
      >
        {showPersonsText}
      </button>
        <button 
        className={buttonClass.join(" ")} onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
// Con React.memo, React guarda el estado de las propiedades de las que depende el componente funcional
// y si no necesita re-renderizar (no cambian las propiedades), no lo hace.
