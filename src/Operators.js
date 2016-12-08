import React, { Component } from 'react';
import './App.css';

class Operators extends Component {
  render() {
    return(
      <div>
        <input type='button' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" value='+' onClick={this.props.onUpdate.bind('+')} />
        <input type='button' value='-' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" onClick={this.props.onUpdate.bind('-')} />
        <input type='button' value='*' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" onClick={this.props.onUpdate.bind('*')} />
        <input type='button' value='/' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" onClick={this.props.onUpdate.bind('/')} />
      </div>
    )
  }
}

export default Operators