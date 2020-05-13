import React, {Component} from 'react'
import './index.css';
import Help from '../help';
import History from '../history';
import Skills from '../skills';
import Skill from '../skill';
import Projects from '../projects';
import Project from '../project';
import Error from '../error';

class DossBoxx extends Component {

  render () {
    const component = (command) => {
      switch(command) {
        case 'help':
          return <Help />;
        case 'skills':
          return <Skills />;
        case 'projects':
          return <Projects />;
        case 'history':
          return <History />;
        default:
          return <Error  message="command not found" />;
      }
    };

    return(
      <div id="dossboxx">
        {component(this.props.command)}
      </div>
    );
  }
}

export default DossBoxx;
