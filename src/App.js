import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import DossBoxx from './components/dossboxx';
import Command from './components/command';
import SECRET_KEY from './config.js';
import backend from "./apis/backend";
let jwt = require('jsonwebtoken');

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged_in: false,
      "name": "Unauthorized",
      command: { "command" : "help", id : -1 }
    }
  }

  // componentWillMount() {
  //   if (localStorage.getItem("token")) {
  //     this.setState({ logged_in: true });
  //     this.getData();
  //   }
  // }
  //
  // getData = async() => {
  //   let token = localStorage.getItem('token');
  //
  //   const URL = "http://localhost:5000/api/user";
  //
  //   let response = await fetch(URL, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'token': token
  //     }
  //   });
  //
  //   let data = await response.json();
  //
  //   this.setState({ data });
  // }
  //
  // handleLogin = async(e) => {
  //   let email = e.target.elements.email.value;
  //   let password = e.target.elements.password.value;
  //
  //   const URL = "http://127.0.0.1:5000/api/login";
  //
  //   // encrypt a token with the proper payload info to send to our api
  //   let token = jwt.sign(
  //     { 'email': email, 'password': password },
  //     SECRET_KEY,
  //     { expiresIn: '1h' } // expires in 1 hour
  //   );
  //
  //   // send the token to register the user
  //   let response = await fetch(URL, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'token': token
  //     }
  //   });
  //
  //   let data = await response.json();
  //
  //   // setup message saying register or error
  //   if (data.message === 'success') {
  //     this.setState({ logged_in: true });
  //
  //     // set the token we recieve into local storage
  //     localStorage.setItem('token', data.token);
  //
  //     this.getData();
  //
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //
  // handleLogOut = () => {
  //   this.setState({
  //     logged_in: false,
  //     data: {
  //       "username": "Unauthorized"
  //     }
  //   });
  //
  //   localStorage.clear();
  // }
  //
  handleRegister = async(formData) => {

    // encrypt a token with the proper payload info to send to our api
    let token = jwt.sign(
      { 'first_name': formData["first_name"], 'last_name': formData["last_name"], 'company': formData["company"], 'email': formData["email"], 'password': formData["password"] },
      SECRET_KEY,
      { expiresIn: '1h' } // expires in 1 hour
    );

    let options = {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    };

    // // send the token to register the user
    let response = await backend.post("register", {}, options);
    let data = await response.data;

    // // setup message saying register or error
    if (Object.keys(data)[0] === 'success') {
      return true;
    } else {
      return false;
    }
  }

  inputReturn = (data, id = -1) => {
    let comData = {
      "command" : data.toLowerCase(),
      "id" : id
    };
    this.setState({command : comData});
  }

  render() {
    return(
      <div className="App container-fluid">
        <Header inputReturn={this.inputReturn} />
        <DossBoxx
          inputReturn={this.inputReturn}
          command={this.state.command}
          handleRegister={this.handleRegister}
        />
        <Command inputReturn={this.inputReturn}/>
      </div>
    );
  }
}

export default App;
