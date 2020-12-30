import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   /* We will nest the rest of our components in this div also */
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // );
    // h1 is interpreted as text
    return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
