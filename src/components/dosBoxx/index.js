import React, { Component } from 'react';
import './index.css';
import Title from '../title';
import Command from '../command';
import History from '../logged_in/history';
import Goals from '../logged_in/goals';
import Links from '../logged_in/links';
import Error from '../error';
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
        "commands" : {}
      }
  }

  componentDidMount() {
    this.setCommands();
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

  clear = () => {
    console.log("cleared");
    this.setState({"command_queue": []});
  }

  setCommands = () => {
    let commands = {
      "help": [<Help />, "View internet commands"],
      "clear": [this.clear, "Purge all past inputs from your internet browser"]
    }
    if (localStorage.getItem("token")) {
      commands["history"] = [<History />, "View my life's story"];
      commands["goals"] = [<Goals />, "View my life's ambitions"];
      commands["links"] = [<Links />, "See my connected internet based web appication pages"];
      commands["logout"] = [this.props.handleLogOut, "Log out of your account"];
    } else {
      commands["login"] = [<Login handleLogin={this.props.handleLogin}/>, "Log in to your account"];
      commands["register"] = [<Register handleRegister={this.props.handleRegister} />, "Register a new account"];
    }

    this.setState({"commands": commands})
  }

  render() {
    console.log(this.state["commands"]);
    return(
      <main>
        <div id="dosBoxx">
          {
            this.state.command_queue[0] &&
            this.state.command_queue.map(command =>
              command
            )
          }
          <Command data={this.props.data} logged_in={this.props.logged_in} focusInput={this.focusInput} inputReturn={this.inputReturn} />
        </div>
      </main>
    );
  }
}

export default DosBoxx;
