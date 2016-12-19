import React from 'react';
import './App.css';

const Button = React.createClass({
  render() {
    return (
      <input
        type='button'
        value={this.props.btn}
        className={this.props.classes}
        onClick={this.props.handleClick}
      />
    )
  }
})

export default Button