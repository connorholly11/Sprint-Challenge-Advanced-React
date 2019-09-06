import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{
  constructor(){
    console.log('constructor working')
    super()
    this.state = {
      hello:{}
    }

    

    }
  componentDidMount(){
    console.log('CDM WORKING')
    axios
      .get('http://localhost:5000/api/players')
      .then((response) => console.log(response))
      .then(response => this.setState({hello:response}))
  }

  render(){
    console.log('render working')
    return(
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    )
  }
}

export default App;
