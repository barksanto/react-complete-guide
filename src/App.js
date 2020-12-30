import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      /* We will nest the rest of our components in this div also */
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is my next paragraph</p>
      </div>
    );
    // h1 is interpreted as text - this is the same as above, just much more cumbersome
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
