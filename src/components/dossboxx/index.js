import React, {Component} from 'react'
import './index.css';
import Help from '../help';
import History from '../history';
import Register from '../register';
import Login from '../login';
import LogOut from '../logout';
import Skills from '../skills';
import Skill from '../skill';
import Projects from '../projects';
import Project from '../project';
import Error from '../error';
import Confirm from '../confirm';

class DossBoxx extends Component {

  render () {
    console.log(this.props);
    const component = (command) => {
        if(this.props.logged) {
          switch(command["command"]) {
            case 'help':
              return <Help logged={this.props.logged}/>;
            case 'skills':
              return <Skills inputReturn={this.props.inputReturn} />;
            case 'skill':
              return <Skill inputReturn={this.props.inputReturn} id={command["id"]} />;
            case 'projects':
              return <Projects inputReturn={this.props.inputReturn} />;
            case 'project':
              return <Project id={command["id"]} />;
            case 'logout':
              return <LogOut handleLogOut={this.props.handleLogOut}/>;
            case 'history':
              return <History />;
            default:
              return <Error message={`command "${command["command"]}" not found`} />;
          }
        } else {
          switch(command["command"]) {
            case 'help':
              return <Help />;
            case 'register':
              return <Register handleRegister={this.props.handleRegister} />;
            case 'login':
              return <Login handleLogin={this.props.handleLogin} />;
            default:
              return <Error message={`command "${command["command"]}" not found`} />;
          }
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
