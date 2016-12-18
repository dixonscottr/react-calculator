import React, { Component } from 'react';
import NumberButtons from './NumberButtons.js'
import Operators from './Operators.js'
import './App.css';

class Buttons extends Component {
  render() {
    return(
      <div className='button-holder'>
        <div className='top-btns'>
          <NumberButtons nums={[0,1,2,3,4,5,6,7,8,9]} onUpdate={this.props.onUpdate.bind(this)} />
          <Operators btns={['+', '-', '/', '*']} onUpdate={this.props.onUpdate.bind(this)} />
        </div>
        <div className='btm-btns'>
          <input type='button' className="equal-button mdl-button mdl-js-button mdl-button--raised" value='=' onClick={this.props.onResult.bind()} />
          <input type='button' className='clear-button mdl-button mdl-js-button mdl-button--raised' value='clear' onClick={this.props.reset.bind()}/>
        </div>
      </div>
    )
  }
}

export default Buttons