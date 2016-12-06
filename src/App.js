import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>React Calculator</h2>
        </div>
        <div>
          <Calculator />
        </div>
      </div>
    );
  }
}

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      operation: '0'
    };
    this.updateOperation = this.updateOperation.bind(this);
    this.resetOperation = this.resetOperation.bind(this);
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
      operation: '0'
    })
  }

  render() {
    return (
      <div className='calculator'>
      <Result operation={this.state.operation}/>
      <Buttons onUpdate={this.updateOperation.bind(this)} reset={this.resetOperation.bind(this)}/>
      </div>
      );
  }
}

class Result extends Component {
  render() {
    let operation = this.props.operation
    return (
      <div className='result-area'>
      <p>{operation}</p>
      </div>
      );
  }
}

class Buttons extends Component {
  render() {
    return(
      <div className='button-holder'>
        <NumberButtons range={[0,9]} onUpdate={this.props.onUpdate.bind(this)} />
        <Operators onUpdate={this.props.onUpdate.bind(this)} />
        <input type='button' className="equal-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored" value='=' />
        <input type='button' className='reset-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored' value='reset' onClick={this.props.reset.bind()}/>
      </div>
    )
  }
}

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

export default App;
