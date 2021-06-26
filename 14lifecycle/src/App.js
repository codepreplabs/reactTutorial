import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    console.log('constructor called');
    super(props);
    this.state = {count:0};
  }

  handleClick(){
    this.setState({count:this.state.count+1});
  }

  componentDidMount(){
    console.log("componentDidMount called");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate called");
  }

  shouldComponentUpdate(props, state){
    console.log("shouldComponentUpdate called");
    if(state.count % 3 === 0){
      return true;
    }
    return false;
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.handleClick.bind(this)}>Click me</button>
        <br/>
        {this.state.count}
      </div>
    );
  }
}

export default App;
