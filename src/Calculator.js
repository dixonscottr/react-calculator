import React, { Component } from 'react';
import Buttons from './Buttons.js'
import Result from './Result.js'
import './App.css';


class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      operation: '0',
      answer: '---'
    };
    this.updateOperation = this.updateOperation.bind(this);
    this.resetOperation = this.resetOperation.bind(this);
    this.completeOperation = this.completeOperation.bind(this);
  }

  completeOperation() {
    let answer
    if(this.state.operation.match(/.?[\D]{2,}.?/)){
      answer = "Invalid"
    }
    else {
      answer = eval(this.state.operation)
      if(String(answer).length > 12) {
        answer = String(answer.toFixed(6)) + '...';
      }
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
      operation: '0',
      answer: '---'
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