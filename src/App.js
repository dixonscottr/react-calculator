import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator.js'
import Operators from './Operators.js'
import NumberButtons from './NumberButtons.js'
import Buttons from './Buttons.js'
import Result from './Result.js'

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
