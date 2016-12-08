import React, { Component } from 'react';
import './App.css';

class Result extends Component {

  render() {
    let operation = this.props.operation
    let answer = this.props.answer
    return (
      <div className='result-area'>
      <p>{operation}</p>
      <p>{answer}</p>
      </div>
      );
  }
}

export default Result