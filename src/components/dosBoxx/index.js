import React, { Component } from 'react';
import './index.css';
import Title from '../title';
import Command from '../command';
import History from '../history';
import Goals from '../goals';
import Links from '../links';
import Quit from '../quit';
import Error from '../error';
import Help from '../help';
import PastInput from '../pastInput';
import Login from '../login';

class DosBoxx extends Component {

  constructor() {
      super();
      this.state = {
        "current_dir": "C/Portfolio:",
        "past_input": "",
        "commands": {
          "RUN": "Run application e.g. run dmc.exe",
          "READ": "Read a word document (read-only) e.g. read stealthisbook.doc",
          "HELP": "Self Explanatory",
          "STUFF": "See all files in directory",
          "NAV": "Open program navigation menu",
          "LOGIN": "Log in to your Personal Computer account",
          "LOGOUT": "Log out of your Personal Computer account",
          "REGISTER": "Create a Personal Computer account to log in and log out of",
          "CLEANSE": "Purge all items on screen from existence",
          "GETMETHEHELLOUTTAHERE": "Quit"
        },
        "docs": {
          "HISTORY": <History />,
          "HISTORY.EXE": <History />,
          "GOALS": <Goals />,
          "GOALS.LST": <Goals />
        },
        "command_queue": [
          <Title />
        ]
      }
  }

  readDocs = (file) => {
    return this.state.docs[file];
  }

  readInput = (command) => {
    const commands = this.state.commands;
    let commandSplit = command.toUpperCase().split(" ");
    if (commands[commandSplit[0]]) {

    } else {
      return false;
    }
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
            this.state.command_queue[0] &&
            this.state.command_queue.map(command =>
              command
            )
          }
          <Command focusInput={this.focusInput} current_dir={this.state.current_dir + "/>"} inputReturn={this.inputReturn} />
          <Login handleLogin={this.props.handleLogin}/>
          {
            this.props.logged_in ?
            <h4>Logged In</h4> :
            <h4>Not Logged In</h4>
          }
        </div>
      </main>
    );
  }
}

export default DosBoxx;
