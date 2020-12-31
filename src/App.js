import React, { useState } from 'react';
import './App.css';
// import Person compontnt from Person Folder using Person.js file
import Person from './Person/Person';

// app is our root component
// class App extends Component {
const App = props => { //no render method on functional components

  //personsState gives us access to the object below - so we replace this.state with personsState
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Barkley", age: 27 },
      { name: "Mango", age: 6 },
      { name: "Mikayla", age: 20 }
    ],
    otherState: 'some other value'
  });

  const switcNameHandler = () => { // normal es6 arrow function // must use this syntax so we can use 'this'
    // console.log('button has been clicked!!');
    setPersonsState({
      persons: [
        { name: "Bananamamamama", age: 27 },
        { name: "Mango", age: 6 },
        { name: "Mikayla", age: 100 }
      ]
    })
  }

  return (
    /* We will nest the rest of our components in this div also */
    /* We render by using the same name of the component we imported*/
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is my next paragraph</p>
      <button onClick={switcNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies : pizza</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // h1 is interpreted as text - this is the same as above, just much more cumbersome
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
}

export default App;


// state = {
//   persons: [
//     { name: "Barkley", age: 27 },
//     { name: "Mango", age: 6 },
//     { name: "Mikayla", age: 20 }
//   ]
// }

// switcNameHandler = () => { // normal es6 arrow function // must use this syntax so we can use 'this'
//   // console.log('button has been clicked!!');
//   this.setState({
//     persons: [
//       { name: "Bananamamamama", age: 27 },
//       { name: "Mango", age: 6 },
//       { name: "Mikayla", age: 100 }
//     ]
//   })
// }