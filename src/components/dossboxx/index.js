import React, {Component} from 'react'
import './index.css';
import Skills from '../skills';
import Skill from '../skill';
import Projects from '../projects';
import Project from '../project';

class DossBoxx extends Component {
  constructor(props){
    super(props);
    this.state = {
      "content" : this.props.command
    };
  }

  render () {
    return(
      <div id="dossboxx">
        <h5>{this.state["content"]}</h5>
      </div>
    );
  }
}

export default DossBoxx;
