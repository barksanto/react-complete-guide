import React, { Component } from 'react';
import './App.css';
// import Person compontnt from Person Folder using Person.js file
import Person from './Person/Person';

// app is our root ocmponent
class App extends Component {
  state = {
    persons: [
      { name: "Barkley", age: 27 },
      { name: "Mango", age: 6 },
      { name: "Mikayla", age: 20 }
    ]
  }

  switcNameHandler = () => { // normal es6 arrow function
    console.log('button has been clicked!!');
  }

  render() {
    return (
      /* We will nest the rest of our components in this div also */
      /* We render by using the same name of the component we imported*/
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is my next paragraph</p>
        <button onClick={this.switcNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies : pizza</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
    // h1 is interpreted as text - this is the same as above, just much more cumbersome
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
