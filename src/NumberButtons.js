import React, { Component } from 'react';
import './App.css';
import Button from './Button'

class NumberButtons extends Component {
  render() {
    const nums = this.props.nums.reverse()
    return (
      <div className='num-buttons'>
        {nums.map(num => {
          return <Button
          btn={num}
          classes="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab num-button"
          value={num}
          handleClick={this.props.onUpdate.bind(num)}
          key={num} 
          />
        })}
      </div>
    )
  }
}

export default NumberButtons

    // let btns = [];
    // for (var i = (this.props.range[0]); i <= (this.props.range[1]); i++) {
    //   btns.push(<input type='button' className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab num-button" value={i} onClick={this.props.onUpdate.bind(i)} key={i} />)
    //   if(i%3===0){
    //     btns.push(<br key={i + .5} />);
    //     }
    //   }
    // return <div>{btns}</div>