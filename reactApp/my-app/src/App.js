import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

// function App() {
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
// }
const App = (props) => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "gan", age: 24 },
      { name: "watch", age: 27 },
      { name: "baby", age: 2 },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "doraemon", age: 100 },
        { name: "watch", age: 27 },
        { name: "baby", age: 2 },
      ],
    });
    console.log(setPersonsState);
    console.log(personState);
  };

  return (
    <div className="App">
      <h1>Hello! react!!!</h1>
      <button onClick={switchNameHandler}>switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      ></Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      ></Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      ></Person>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null ,'hello! react!!'));
};

export default App;
