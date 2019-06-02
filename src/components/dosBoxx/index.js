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
          "CD": "Change directory",
          "RUN": "Run application",
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

  render() {
    return(
      <main>
        <div id="dosBoxx">
          <PastInput pastInput={this.state.current_dir + " " + this.state.past_input} />
          <Command current_dir={this.state.current_dir} />
        </div>
      </main>
    );
  }
}

export default DosBoxx;
