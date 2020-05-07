import React, {Component} from 'react'
import './index.css';
import backend from "../../apis/backend";

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      "data" : {}
    };
  }

  componentDidMount(){
    backend.get(`projects/${this.props.id}`).then((res) => {
      this.setState({"data" : res.data});
    });
  }

  render () {
    let projectData = (Object.keys(this.state["data"]).length > 0) ?
      <div class="col-md-12">
        <h3>{this.state["data"].id}</h3>
        <h3>{this.state["data"].title}</h3>
        <h3>{this.state["data"].description}</h3>
        <h3>{this.state["data"].url}</h3>
        <h3>{this.state["data"].github}</h3>
      </div>
      :
      <div class="col-md-12">
        <h3>No Project Found</h3>
      </div>;
    return(
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Project</h1>
          </div>
        </div>
        <div class="row">
          {projectData}
        </div>
      </div>
    );
  }
}

export default Project;
