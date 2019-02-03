import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { red, styles } from 'ansi-colors';
import ChoosePartner from './ChoosePartner';
import User from './User';
import { Route, Link, HashRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    // initialize the state
    this.state = {
        error:null,
        personFromDB: []
    }
}

componentWillMount(){

  if(window.location.hostname === "localhost")
  {
    fetch('http://localhost:55023/api/persons')
    .then(response => response.json())
    .then(personFromDB => this.setState({
      personFromDB:personFromDB
  }))
  .catch(error => console.log('parsing failed', error))
  }
  else
  {
    fetch('http://proj.ruppin.ac.il/bgroup87/test1/tar4/api/persons')
    .then(response => response.json())
    .then(personFromDB => this.setState({
      personFromDB:personFromDB
  }))
    .catch(error => console.log('parsing failed', error))
  }
}

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/"     component={() => <ChoosePartner personFromDB={this.state.personFromDB}/>}/>
            <Route path="/user"       component={User}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;