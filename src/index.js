import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// <App/> is a exported from App.js
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
