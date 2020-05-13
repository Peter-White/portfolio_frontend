import React, { Component } from 'react';
import './index.css';
import backend from "../../apis/backend";
import Loading from '../loading';

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

  backToSkills = (e) => {
    e.preventDefault();
    this.props.inputReturn("skills");
  };

  render() {
    let content = (Object.keys(this.state["data"]).length > 0) ?
      <div className="col-md-12">
        <h3>{this.state["data"].id}</h3>
        <h3>{this.state["data"].title}</h3>
        <h3>{this.state["data"].category}</h3>
        <h3>{this.state["data"].year_started}</h3>
      </div>
      :
      <div className="col-md-12">
        <h1>No Data</h1>;
      </div>;

    if(Object.keys(this.state["data"]).length < 1) {
      return <Loading />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Skill</h1>
            </div>
          </div>
          <div className="row">
            {content}
          </div>
          <div className="row">
            <div className="col-md-12">
              <a className="back" href="#" onClick={this.backToSkills}><h3>Back to Skills</h3></a>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Skill;
