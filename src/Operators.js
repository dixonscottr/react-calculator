import React, { Component } from 'react';
import './App.css';

class Operators extends Component {
  render() {
    const btns = this.props.btns
    return(
      <div>
        {btns.map(btn => {
          return <Button
            btn={btn}
            handleClick={this.props.onUpdate.bind(btn)}
            classes='mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab op-button'
            />
        })}
      </div>
    )
  }
}

const Button = React.createClass({
  render() {
    return (
      <input type='button' value={this.props.btn} className={this.props.classes} onClick={this.props.handleClick} />
    )
  }
})

export default Operators

// <input type='button'  value='+' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab op-button" onClick={this.props.onUpdate.bind('+')} />
// <input type='button' value='-' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab op-button" onClick={this.props.onUpdate.bind('-')} />
// <input type='button' value='*' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab op-button" onClick={this.props.onUpdate.bind('*')} />
// <input type='button' value='/' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab op-button" onClick={this.props.onUpdate.bind('/')} />