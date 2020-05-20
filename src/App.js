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
      command: { "command" : "help", id : -1 },
      data: {}
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

    let options = {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    };

    let response = await backend.post("user", {}, options);
    let data = await response.data;

    this.setState({ data });
  };

  handleLogin = async(formData) => {
    // // encrypt a token with the proper payload info to send to our api
    let token = jwt.sign(
      { 'email': formData["email"], 'password': formData["password"] },
      SECRET_KEY,
      { expiresIn: '1h' } // expires in 1 hour
    );

    let options = {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    };

    // // // send the token to register the user
    let response = await backend.post("login", {}, options);
    let data = await response.data;

    // // setup message saying register or error
    if (data.message === 'success') {
      this.setState({ logged_in: true });

      // set the token we recieve into local storage
      localStorage.setItem('token', data.token);

      this.getData();

      this.setState({command: { "command" : "help", id : -1 }});
    } else {
      return data.message;
    }
  };

  handleLogOut = () => {
    this.setState({
      logged_in: false,
      data: {},
      command: { "command" : "help", id : -1 }
    });

    localStorage.clear();
  };

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
      this.setState({command: { "command" : "confirm", id : -1 }});
    } else {
      return false;
    }
  };

  handleCode = async(code) => {
    let options = {
      headers: {
        'Content-Type': 'application/json',
        'code': code
      }
    };

    let response = await backend.post("confirm_code", {}, options);
    let data = await response.data;

    if(Object.keys(data)[0] === "Success") {
      this.setState({ command: { "command" : "login", id : -1 } });
    } else {
      return data;
    }
  };

  inputReturn = (data, id = -1) => {
    let comData = {
      "command" : data.toLowerCase(),
      "id" : id
    };
    this.setState({command : comData});
  };


  render() {
    return(
      <div className="App container-fluid">
        <Header inputReturn={this.inputReturn} />
        <DossBoxx
          logged={this.state.logged_in}
          data={this.state.data}
          inputReturn={this.inputReturn}
          command={this.state.command}
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
          handleLogOut={this.handleLogOut}
          handleCode={this.handleCode}
        />
      <Command data={this.state.data} inputReturn={this.inputReturn}/>
      </div>
    );
  }
}

export default App;
