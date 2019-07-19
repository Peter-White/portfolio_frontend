import React, { Component } from 'react';
import './index.css';
import Title from '../title';
import Command from '../command';
import History from '../logged_in/history';
import Goals from '../logged_in/goals';
import Links from '../logged_in/links';
import Quit from '../quit';
import Error from '../logged_in/error';
import Help from '../logged_in/help';
import PastInput from '../logged_in/pastInput';
import Login from '../logged_out/login';
import Register from '../logged_out/register';

class DosBoxx extends Component {

  constructor() {
      super();
      this.state = {
        "past_input": "",
        "command_queue": [
          <Title />
        ],
        data: {
          "username": "Unauthorized"
        }
      }
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
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

  inputReturn = e => {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      const past = <PastInput pastInput={this.state.current_dir + " " + e.target.value} />;

      this.setState(() => {
        let list = this.state.command_queue.push(past);
        return {
          list
        };
      });
      document.getElementById("command-input").focus();
    }
  }

  render() {
    return(
      <main>
        <div id="dosBoxx">
          {
            this.props.logged_in ?
            this.state.command_queue[0] &&
            this.state.command_queue.map(command =>
              command
            ) :
            <Login handleLogin={this.props.handleLogin}/>
          }
          <Register handleRegister={this.props.handleRegister} />
          <Command data={this.state.data} logged_in={this.props.logged_in} focusInput={this.focusInput} inputReturn={this.inputReturn} />


        </div>
      </main>
    );
  }
}

export default DosBoxx;
