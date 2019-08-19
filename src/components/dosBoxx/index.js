import React, { Component } from 'react';
import './index.css';
import Title from '../title';
import Command from '../command';
import History from '../logged_in/history';
import Goals from '../logged_in/goals';
import Links from '../logged_in/links';
import Error from '../error';
import Help from '../help';
import PastInput from '../pastInput';
import Login from '../logged_out/login';
import Register from '../logged_out/register';
import Message from '../message';

class DosBoxx extends Component {

  constructor() {
      super();
      this.state = {
        "command_queue": [
          <Title />
        ],
        "commands" : {}
      }
  }

  componentDidMount() {
    this.setCommands();
  }

  inputReturn = command => {
    let command_queue = this.state["command_queue"];
    let pastInput = <PastInput username={this.props.data["username"]} command={command} />;
    command_queue.push(pastInput);
    command = command.toLowerCase().replace(/\s+/g, '');
    if(this.state["commands"][command] != undefined) {
      if("$$typeof" in this.state["commands"][command][0]) {
        if(command === "login" || command === "register") {
          this.clear();
          command_queue = [];
        }
        command_queue.push(this.state["commands"][command][0]);
        this.setState({"command_queue": command_queue});
      } else {
        this.state["commands"][command][0]();
      }
    } else if (command === "") {
      let command_queue = this.state["command_queue"];
      command_queue.push(<Message message={`Please type a valid command. Please type "help" to see the valid commands.`} />);
      this.setState({"command_queue": command_queue});
    } else {
      let command_queue = this.state["command_queue"];
      command_queue.push(<Error command={command} />);
      this.setState({"command_queue": command_queue});
    }
  }

  clear = () => {
    this.setState({"command_queue": []});
  }

  handleLoginForm = e => {
    e.preventDefault();

    this.props.handleLogin(e).then(result => {
      this.clear();
      if(result) {
        let command_queue = this.state["command_queue"];
        command_queue.push(<Message message={`Hello`} />);
        this.setState({"command_queue": command_queue});

        this.setCommands();
      } else {
        let command_queue = this.state["command_queue"];
        command_queue.push(<Message message={"Account not found"} />);
        this.setState({"command_queue": command_queue});
      }
    });
  }

  handleLogOutCommand = () => {
    this.props.handleLogOut();

    let command_queue = this.state["command_queue"];
    command_queue.push(<Message message={`Goodbye`} />);
    this.setState({"command_queue": command_queue});

    this.setCommands();
  }

  handleRegisterFormData = data => {
    this.props.handleRegister(data).then(result => {
      this.clear();
      let command_queue = this.state["command_queue"];
      command_queue.push(<Message message={`You are now registered. Go to "login" to log in.`} />);
      this.setState({"command_queue": command_queue});
    });
  }

  setCommands = () => {
    let commands = {
      "clear": [this.clear, "Purge all past inputs from your internet browser"]
    };
    if (localStorage.getItem("token")) {
      commands["history"] = [<History />, "View my life's story"];
      commands["goals"] = [<Goals />, "View my life's ambitions"];
      commands["links"] = [<Links />, "See my connected internet based web appication pages"];
      commands["logout"] = [this.handleLogOutCommand, "Log out of your account"];
    } else {
      commands["login"] = [<Login handleLoginForm={this.handleLoginForm}/>, "Log in to your account"];
      commands["register"] = [<Register handleRegisterFormData={this.handleRegisterFormData} />, "Register a new account"];
    }

    commands["help"] = [<Help commands={commands}/>, "View internet commands"];

    this.setState({"commands": commands});
  }

  render() {
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
