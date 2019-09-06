import React from 'react';
import './App.css';
import axios from 'axios'
import axiosCall from './customHooks/axiosCall';

class App extends React.Component{
  constructor(){
    console.log('constructor working')
    super()
    this.state = {
      players:[]
    }

    

    }
  componentDidMount(){
    console.log('CDM WORKING')
    axios
      .get('http://localhost:5000/api/players')
      // .then(response => console.log(response.data))
      //IF I CANCEL OUT THIS CONSOLE LOG ^^^ THEN PLAYERS GETS FILLED WITH RESPONSE DATA, IF NOT THEN IT DOESNT, WHY????
      .then(response => this.setState({players: response.data}))
  }

  render(){
    console.log('render working')
    console.log('state', this.state.players)
    return(
      <div>
        <h1>HELLO WORLD</h1>
        {this.state.players.map(player => {
          return player=[player.name]
        })}
        
      </div>
    )
  }
}

export default App;
