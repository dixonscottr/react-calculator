import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>React Calculator</h2>
        </div>
        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
