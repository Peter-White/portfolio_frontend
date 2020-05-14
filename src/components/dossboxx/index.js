import React, {Component} from 'react'
import './index.css';
import Help from '../help';
import History from '../history';
import Register from '../register';
import Skills from '../skills';
import Skill from '../skill';
import Projects from '../projects';
import Project from '../project';
import Error from '../error';

class DossBoxx extends Component {

  render () {
    const component = (command) => {
      switch(command["command"]) {
        case 'help':
          return <Help />;
        case 'skills':
          return <Skills inputReturn={this.props.inputReturn} />;
        case 'skill':
          return <Skill inputReturn={this.props.inputReturn} id={command["id"]} />;
        case 'projects':
          return <Projects inputReturn={this.props.inputReturn} />;
        case 'project':
          return <Project id={command["id"]} />;
        case 'register':
          return <Register handleRegister={this.props.handleRegister} />;
        case 'history':
          return <History />;
        default:
          return <Error message={`command "${command["command"]}" not found`} />;
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
