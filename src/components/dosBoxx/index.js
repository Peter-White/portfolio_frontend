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

class DosBoxx extends Component {

  constructor() {
      super();
      this.state = {
        "current_dir": "C:/>",
        "past_input": "",
        "commands": {
          "CD <DIR>": "Change directory",
          "RUN <PROGRAM>": "Run application",
          "HELP": "Self Explanatory",
          "STUFF": "See all files in directory",
          "NAV": "Open program navigation menu",
          "LOGIN": "Log in to your Personal Computer account",
          "LOGOUT": "Log out of your Personal Computer account",
          "REGISTER": "Create a Personal Computer account to log in and log out of",
          "CLEANSE": "Purge all items on screen from existence",
          "GETMETHEHELLOUTTAHERE": "Quit"
        },
        "command_queue": [
          <Title />
        ]
      }
    }

  inputReturn = e => {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        const past = <PastInput pastInput={this.state.current_dir + " " + e.target.value} />;
        this.setState(() => {
          const list = this.state.command_queue.push(past);

          return {
            list
          };
        });
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
          <Command current_dir={this.state.current_dir} inputReturn={this.inputReturn} />
        </div>
      </main>
    );
  }
}

export default DosBoxx;
