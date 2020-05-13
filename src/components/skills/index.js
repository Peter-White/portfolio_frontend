import React, {Component} from 'react'
import './index.css';
import backend from "../../apis/backend";

class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      "data" : {}
    };
  }

  componentDidMount(){
    backend.get(`skills`).then((res) => {
      this.setState({"data" : res.data});
    });
  }

  listItems = (skill) => {
    let items = this.state["data"][skill].map((data) => <li id={data.id}>{data.title}</li>);

    return <ul>{items}</ul>;
  };

  render () {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Skills</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h3>Database Tools</h3>
          </div>
          <div className="col-md-3">
            <h3>Environment</h3>
            <ul>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Expertise</h3>
            <ul>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Platform</h3>
            <ul>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <h3>Framework</h3>
            <ul>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Language</h3>
            <ul>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Library</h3>
            <ul>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Tool</h3>
            <ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
