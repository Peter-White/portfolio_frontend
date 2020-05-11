import React, {Component} from 'react'
import './index.css';
import Skills from '../skills';
import Skill from '../skill';
import Projects from '../projects';
import Project from '../project';
import Error from '../error';

class DossBoxx extends Component {
  componentDidMount(){

  }

  render () {
    return(
      <div id="dossboxx">
        <Error message={"command not found"}/>
      </div>
    );
  }
}

export default DossBoxx;
