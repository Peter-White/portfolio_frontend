import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import DosBoxx from './components/dosBoxx';
import SECRET_KEY from './config.js';
let jwt = require('jsonwebtoken');

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged_in: false
    }
  }

  componentWillMount() {
    if (localStorage.getItem("token")) {
      this.setState({ logged_in: true });
    }
  }

  handleLogin = async(e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    const URL = "http://127.0.0.1:5000/api/login";

    // encrypt a token with the proper payload info to send to our api
    let token = jwt.sign(
      { 'email': email, 'password': password },
      SECRET_KEY,
      { expiresIn: '1h' } // expires in 1 hour
    );

    // send the token to register the user
    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });

    let data = await response.json();

    // setup message saying register or error
    if (data.message === 'success') {
      this.setState({ logged_in: true });

      // set the token we recieve into local storage
      localStorage.setItem('token', data.token);

      alert('You are now logged in!');
    } else {
      alert(data.message);
    }
  }

  handleLogOut = (e) => {
    e.preventDefault();

    this.setState({ logged_in: false });

    localStorage.clear();

    alert("You are now logged out");
  }

  render() {
    return(
      <div className="App">
        <Header />
        <DosBoxx handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
