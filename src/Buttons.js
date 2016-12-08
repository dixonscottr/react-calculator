import React, { Component } from 'react';
import NumberButtons from './NumberButtons.js'
import Operators from './Operators.js'
import './App.css';

class Buttons extends Component {
  render() {
    return(
      <div className='button-holder'>
        <NumberButtons range={[0,9]} onUpdate={this.props.onUpdate.bind(this)} />
        <Operators onUpdate={this.props.onUpdate.bind(this)} />
        <input type='button' className="equal-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored" value='=' onClick={this.props.onResult.bind()} />
        <input type='button' className='reset-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored' value='reset' onClick={this.props.reset.bind()}/>
      </div>
    )
  }
}

export default Buttons