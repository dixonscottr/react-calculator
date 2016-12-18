import React, { Component } from 'react';
import './App.css';
import Button from './Button'

class Operators extends Component {
  render() {
    const btns = this.props.btns
    return(
      <div className='operators'>
        {btns.map(btn => {
          return <Button
            btn={btn}
            handleClick={this.props.onUpdate.bind(btn)}
            classes='mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab op-button'
            key={btn}
            />
        })}
      </div>
    )
  }
}

export default Operators