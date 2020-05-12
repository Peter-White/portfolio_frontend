import React, {Component} from 'react'
import './index.css';
import History from '../history';
import Skills from '../skills';
import Skill from '../skill';
import Projects from '../projects';
import Project from '../project';
import Error from '../error';
import Loading from '../loading';

class DossBoxx extends Component {
  componentDidMount(){

  }

  render () {
    return(
      <div id="dossboxx">
        <History />
      </div>
    );
  }
}

export default DossBoxx;
