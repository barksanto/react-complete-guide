import React, { Component } from 'react';
import './App.css';
// import Person compontnt from Person Folder using Person.js file
import Person from './Person/Person';

// app is our root component
// class App extends Component {
class App extends Component { //no render method on functional components

  //personsState gives us access to the object below - so we replace this.state with personsState
  state = {
    persons: [
      { name: "Barkley", age: 27 },
      { name: "Mango", age: 6 },
      { name: "Mikayla", age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => { // normal es6 arrow function // must use this syntax so we can use 'this'
    // console.log('button has been clicked!!');
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Mango", age: 6 },
        { name: "Mikayla", age: 100 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Barkley", age: 27 },
        { name: event.target.value, age: 6 },
        { name: "Mikayla", age: 20 }
      ]
    })
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backhroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '8px'

    };

    return (
      /* We will nest the rest of our components in this div also */
      /* We render by using the same name of the component we imported*/
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* same as below, however it returns a function call with an explicit return */}
        {/* not reccommended if we dont have to */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {/* we only added click event to 1st paragraph - but event will trigger and make its changes*/}
        {
          this.state.showPersons === true ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                // added handler to this element. passing a  reference to the switchNameHandler
                click={this.switchNameHandler.bind(this, 'BARKLEYMANGUEIRASANTO')}>My Hobbies : pizza</Person>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                changed={this.nameChangedHandler} />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
        }
      </div>
    );
  }
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