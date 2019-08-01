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
      logged_in: false,
      data: {
        "username": "Unauthorized"
      }
    }
  }

  componentWillMount() {
    if (localStorage.getItem("token")) {
      this.setState({ logged_in: true });
      this.getData();
    }
  }

  getData = async() => {
    let token = localStorage.getItem('token');

    const URL = "http://localhost:5000/api/user";

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });

    let data = await response.json();

    this.setState({ data });
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

      this.getData();

      alert('You are now logged in!');
    } else {
      alert(data.message);
    }
  }

  handleLogOut = (e) => {
    e.preventDefault();

    this.setState({
      logged_in: false,
      data: {
        "username": "Unauthorized"
      }
    });

    localStorage.clear();

    alert("You are now logged out");
  }

  handleRegister = async(e) => {
    e.preventDefault();

    let first_name = e.target.elements.first_name.value;
    let last_name = e.target.elements.last_name.value;
    let company = e.target.elements.company.value;
    let username = e.target.elements.username.value;
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    const URL = "http://127.0.0.1:5000/api/register";

    // encrypt a token with the proper payload info to send to our api
    let token = jwt.sign(
      { 'first_name': first_name, 'last_name': last_name, 'company': company, 'email': email, 'password': password, 'username': username },
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

    console.log(Object.keys(data)[0]);
    console.log(Object.keys(data)[0] === "error");

    // setup message saying register or error
    if (data.message === 'success') {
      alert('Your are now registered!');
    } else {
      alert(data.message);
    }
  }

  render() {
    return(
      <div className="App">
        <Header />
        <DosBoxx data={this.state.data} logged_in={this.state.logged_in} handleLogOut={this.handleLogOut} handleLogin={this.handleLogin} handleRegister={this.handleRegister} />
      </div>
    );
  }
}

export default App;
