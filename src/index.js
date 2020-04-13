// importing React libs from node_modules folder (see package.json)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 💥💥💥 Mount a React element to the DOM (only once per app) 💥💥💥

// render App at the DOM element with 'root' class
ReactDOM.render(<App />, document.getElementById('root'));