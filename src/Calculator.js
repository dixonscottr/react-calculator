import React, { Component } from 'react';
import Buttons from './Buttons.js'
import Result from './Result.js'
import './App.css';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      operation: '0',
      answer: ''
    };
    this.updateOperation = this.updateOperation.bind(this);
    this.resetOperation = this.resetOperation.bind(this);
    this.completeOperation = this.completeOperation.bind(this);
  }

  completeOperation() {
    var operation = this.state.operation;
    var answer;
    var nums = operation.split(/[+=/*]/);
    var operator = operation.split(/[0-9]/).filter(Boolean)[0];
    var part1 = parseInt(nums[0]);
    var part2 = parseInt(nums[1]);
    if(operator==='+'){
      answer = part1 + part2;
    }
    else if(operator === '-'){
      answer = part1 - part2;
    }
    else if(operator === '*'){
      answer = part1 * part2;
    }
    else if(operator === '/'){
      answer = part1 / part2;
    }
    else {
      answer = 'invalid'
    }
    this.setState({
      answer: answer
    })
  }

  updateOperation(char) {
    if(this.state.operation === '0') {
        this.setState({
        operation: char.target.value
      })
    }
    else {
      this.setState({
        operation: this.state.operation.concat(char.target.value)
      })
    }
  }

  resetOperation() {
    this.setState({
      operation: '0'
    })
  }

  render() {
    return (
      <div className='calculator'>
      <Result operation={this.state.operation} answer={this.state.answer}/>
      <Buttons onUpdate={this.updateOperation.bind(this)} reset={this.resetOperation.bind(this)} onResult={this.completeOperation.bind(this)}/>
      </div>
      );
  }
}

export default Calculator