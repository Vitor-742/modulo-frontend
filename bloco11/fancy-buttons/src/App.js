import './App.css';
import React from 'react';



class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      contagem: 0
    }
  }

  handleClick () {
    console.log('a')
    console.log(this)
    this.setState((anterior, _props) => ({
      contagem: anterior.contagem + 1
    }))
  }

  render () {
    return <button onClick={this.handleClick}>{this.state.contagem}</button>
  }
  

}

export default App;
