import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import User from './User';
import RouteButton from './RouteButton'

class ChoosePartner extends React.Component{
  constructor(props) {
    super(props);
  }
    render() {
      return(
        <div className="ChoosePartner">
        <Header/>
        <Body personFromDB={this.props.personFromDB}/>
        <Footer/>
        </div>
          );
        } 
}

class Header extends React.Component{
              render() {
            return(
             <div id="title">
               <h1>Tinder</h1>
             </div> 
            );
          }
        }
      
class Body extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        minAge: null,
        maxAge: null,
        gender: null,
        personFromDB: this.props.personFromDB
    }
  }
  
  setMinAge = (evt) => {
      this.setState({ minAge: evt.target.value })
  }
  
  setMaxAge = (evt) => {
    this.setState({ maxAge: evt.target.value })
  }
  
  setGender(event) {
    this.setState({gender: event.target.value});
  }

  render() {
    return(
        <div id="body">
            <div id="gender">
              <h4>Sex:</h4>
              <form required>
                <div onChange={this.setGender.bind(this)} required className="radio">
                    <input type="radio" name="gender" value="Male" />
                    Male
                    <input type="radio" name="gender" value="Female" />
                    Female
                </div>
              </form>
            </div>
            <div id="age">
              <h4>Choose The Age:</h4>
              <h5>Between</h5>
              <input type="text" onChange={this.setMinAge} required/>
              <h5>And</h5>
              <input type="text" onChange={this.setMaxAge} required/>
            </div>
            <div id="search">
              <RouteButton value='Find' pathname='/user' data={this.state}/>
            </div>
        </div>
      );
    }
  }

  class Footer extends React.Component{

    render() {
      return(
        <div id="footer">
         <h6>Desigen by bgroup87</h6>
        </div>
  
      );
    }
  }

  export default ChoosePartner;