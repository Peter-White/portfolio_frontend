import React, { Component } from 'react';
import './index.css';
import backend from "../../apis/backend";

class Skill extends Component {
  constructor(props){
    super(props);
    this.state = {
      "data" : {}
    };
  }

  componentDidMount(){
    backend.get(`http://localhost:5000/api/skills/${this.props.id}`).then((res) => {
      this.setState({"data" : res.data});
    });
  }

  render() {
    let content = (Object.keys(this.state["data"]).length > 0) ?
      <div class="col-md-12">
        <h3>{this.state["data"].id}</h3>
        <h3>{this.state["data"].title}</h3>
        <h3>{this.state["data"].category}</h3>
        <h3>{this.state["data"].year_started}</h3>
      </div>
      :
      <div class="col-md-12">
        <h1>No Data</h1>;
      </div>;
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Skill</h1>
          </div>
        </div>
        <div class="row">
          {content}
        </div>
      </div>
    );
  }
}

export default Skill;
