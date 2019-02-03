import React, { Component } from 'react';
import logo from './logo.svg';
import './User.css';
import { red, styles } from 'ansi-colors';
import App from './App';
import RouteButton from './RouteButton'

var personlist = []

class User extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="User">
        <Header/>
        <Body minAge={this.props.location.data.minAge} maxAge={this.props.location.data.maxAge} gender={this.props.location.data.gender} personFromDB={this.props.location.data.personFromDB}/>
        <Footer/>
      </div>
    );
  }
}


class Header extends React.Component{
    
    render() {
      return(
       <div id="title">
         <RouteButton value='Back Home' pathname='/'/>
       </div> 
      );
    }
  }
  
  class Body extends React.Component{
    constructor(props){
        super(props);
        // initialize the state
        this.state = {
            index: 0,
            //error:null,
            //personFromDB: []
        }
      this.like = this.like.bind(this);
      this.next = this.next.bind(this);
    }

    // componentDidMount(){
    //   fetch('http://localhost:55023/api/persons')
    //   .then(response => response.json())
    //   .then(personFromDB => this.setState({
    //     personFromDB:personFromDB
    //   }))
    //   .catch(error => console.log('parsing failed', error))
    //   }

      //const api_key = '161d130b6575207c8c50e85fd94ac56d';
      //let url= 'http://localhost:55023/api/persons';
      //const mode = 'search/movie?query=';
      //const movieName = '&query=' + encodeURI(this.state.txt);
      //const key = '&api_key=' + api_key;
    
      //url = url + mode + key + movieName;
      
    //---------------------------------------------------------------------------

    like(){
        //console.log("the name is " + name);
        if(this.state.index < personlist.length -1)
        {
            this.setState({index: this.state.index + 1 });
        }
        else
        {
            this.setState({index: 0 });
        }
    }
    next(){
        if(this.state.index < personlist.length -1)
        {
            this.setState({index: this.state.index + 1 });
        }
        else
        {
            this.setState({index: 0 });
        }
      }
  
    render() {
      // return(
      //   <div id="body">
          
      //     <h1>{this.props.personFromDB[0].Name}</h1>
          
      //   </div>
      // );
        let p; 
        let k;
        personlist = this.props.personFromDB.filter((person) => {
          return (person.Age >= this.props.minAge && person.Age <= this.props.maxAge && person.Gender == this.props.gender)
        });
        if(personlist.length==0)
          return(<h1>There is no fitting persons</h1>)
          
        if(personlist[this.state.index].Hobbies != null) {
           p = <p>Hobbies: {
                personlist[this.state.index].Hobbies.map((hobbie) =>
                <Hobbie hobbiename={hobbie}/>
                )
            }</p>;
        } else {
           p = <p>There Is No Hobbies</p>;
        } 
      return(
        
        <div id="body">
            {/* {
            this.props.personlist.map((person) =>
                
            )
            } */}
            <h1>{personlist[this.state.index].Name}</h1>
            <img src={"http://proj.ruppin.ac.il/bgroup87/test1/tar4" + personlist[this.state.index].Image.substring(2,personlist[this.state.index].Image.length)}/>
            <br></br>
            <button onClick = {this.like}>---like---</button>
            <button onClick = {this.next}>---next---</button>
            <p>Age: {personlist[this.state.index].Age}</p>
            <p>Height: {personlist[this.state.index].Height}</p>
            <p>Location: {personlist[this.state.index].Address}</p>
            {p}
        </div>
      );
    }
  }  

  class Hobbie extends React.Component {
    render() {
      return (
          <p>
          {this.props.hobbiename}
          </p>
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

  export default User;