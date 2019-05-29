import React, { Component } from 'react';
import './index.css';
import Title from '../title';
import Command from '../command';
import History from '../history';
import Goals from '../goals';
import Links from '../links';
import Quit from '../quit';

class DosBoxx extends Component {

  constructor() {
      super();
      this.state = {
        "current_dir": "C:/>"
      }
    }
  // let commands = {
  //   "cd": "Change directory",
  //   "run": "Run application",
  //   "help": "Get function names",
  //   "stuff": "See all files in directory",
  //   "nav": "Open program navigation menu",
  //   "login": "Log in to your Personal Computer account",
  //   "logout": "Log out of your Personal Computer account",
  //   "register": "Create a Personal Computer account to log in and log out of",
  //   "cleanse": "Purge all items on screen from existence",
  //   "getmethehellouttahere": "Quit"
  // };

  render() {
    return(
      <main>
        <div id="dosBoxx">
          <Title />
          <Command current_dir={this.state.current_dir} />
          <History />
          <Goals />
          <Links />
          <Quit />
        </div>
      </main>
    );
  }
}

export default DosBoxx;
