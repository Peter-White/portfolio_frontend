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

class DosBoxx extends Component {

  constructor() {
      super();
      this.state = {
        "current_dir": "C:/>",
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
        }
      }
    }

  render() {
    return(
      <main>
        <div id="dosBoxx">
          <Title />
          <Command current_dir={this.state.current_dir} />
          <Help commands={this.state.commands} />
        </div>
      </main>
    );
  }
}

export default DosBoxx;
