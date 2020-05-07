import React, { Component } from 'react';
import './App.css';
// import DosBoxx from './components/dosBoxx';
import Skills from './components/skills';
import Skill from './components/skill';
import Projects from './components/projects';
import Project from './components/project';
import SECRET_KEY from './config.js';
let jwt = require('jsonwebtoken');

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged_in: false,
      data: {
        "username": "Unauthorized"
      }
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
  // handleRegister = async(formData) => {
  //
  //   const URL = "http://127.0.0.1:5000/api/register";
  //
  //   // encrypt a token with the proper payload info to send to our api
  //   let token = jwt.sign(
  //     { 'first_name': formData["first_name"], 'last_name': formData["last_name"], 'company': formData["company"], 'email': formData["email"], 'password': formData["password"], 'username': formData["username"] },
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
  //   if (Object.keys(data)[0] === 'success') {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    return(
      <div className="App">
        <Skills />
      </div>
    );
  }
}

export default App;
