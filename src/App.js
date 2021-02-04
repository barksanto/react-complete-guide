import React, { Component } from 'react';
import './App.css';
// import Person compontnt from Person Folder using Person.js file
import Person from './Person/Person';
// import styled from 'styled-components';
import classes from './App.css';

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
//       border-radius: 8px;

//       &:hover{
//         background-color: ${props => props.alt ? 'salmon' : 'lightblue'};
//         color: black;
//       }
//     `

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
       //should be p.id 
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: person })

    this.setState({
      persons: [
        { id: "blah", name: "Barkley", age: 27 },
        { id: "chic", name: event.target.value, age: 6 },
        { id: "aman", name: "Mikayla", age: 20 }
      ]
    })
  }

  deletePersonhandler = (personIndex) => {
    // slice copies the old array and returns a new one store in persons const
    // or we could use spread operator - const persons = [...this.state.persons]
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   borderRadius: '8px'

    // };

    let persons = null;
    let btnClass = [classes.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => { // if we use more than one argument - must wrap in parenthesis
            // return what we want to map this object into
            return <Person
              click={() => this.deletePersonhandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      // style.backgroundColor = 'red';
      btnClass.push(classes.Red)
    }

    const assignedClasses = [];  //['red', 'bold'].join(' ');
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      /* We will nest the rest of our components in this div also */
      /* We render by using the same name of the component we imported*/
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}> This is really working</p>
        {/* same as below, however it returns a function call with an explicit return */}
        {/* not reccommended if we dont have to */}
        <button
          // style={style}
          // alt={this.state.showPersons}
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>Toggle Button</button>
        {/* we only added click event to 1st paragraph - but event will trigger and make its changes*/}
        {/* this helps keep our core template clean */}
        {persons}
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
