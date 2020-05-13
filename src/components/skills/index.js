import React, {Component} from 'react'
import './index.css';
import backend from "../../apis/backend";
import Loading from '../loading';

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

  toSkill = (e) => {
    this.props.inputReturn("skill", e.target.id);
  };

  list_items = (skill) => {
    let items = this.state["data"][skill].map((data) => <li key={data.id} onClick={this.toSkill} id={data.id}>{data.title}</li>);

    return <ul id="skill_list">{items}</ul>;
  };

  render () {

    if(Object.keys(this.state["data"]).length < 1) {
      return <Loading />;
    } else {
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
              {this.list_items("database")}
            </div>
            <div className="col-md-3">
              <h3>Environment</h3>
              {this.list_items("environment")}
            </div>
            <div className="col-md-3">
              <h3>Expertise</h3>
              {this.list_items("expertise")}
            </div>
            <div className="col-md-3">
              <h3>Platform</h3>
              {this.list_items("platform")}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h3>Framework</h3>
              {this.list_items("framework")}
            </div>
            <div className="col-md-3">
              <h3>Language</h3>
              {this.list_items("language")}
            </div>
            <div className="col-md-3">
              <h3>Library</h3>
              {this.list_items("library")}
            </div>
            <div className="col-md-3">
              <h3>Tool</h3>
              {this.list_items("tool")}
            </div>
          </div>
        </div>
      );
    }

  }
}

export default Skills;
