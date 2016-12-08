import React, { Component } from 'react';
import './App.css';

class NumberButtons extends Component {
  render() {
    let btns = [];
    for (var i = (this.props.range[0]); i <= (this.props.range[1]); i++) {
      btns.push(<input type='button' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" value={i} onClick={this.props.onUpdate.bind(i)} key={i} />)
      if(i%3===0){
        btns.push(<br key={i + .5} />);
        }
      }
    return <div>{btns}</div>
  }
}

export default NumberButtons