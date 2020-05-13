import React, { Component } from 'react';
import './index.css';
import backend from "../../apis/backend";
import Loading from '../loading';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "data" : []
    };
  }

  componentWillMount() {
    backend.get(`projects`).then((res) => {
      this.setState({"data" : res.data});
    });
  }

  toProject = (e) => {
    this.props.inputReturn("project", e.target.id);
  };

  render() {
    const rows = (data) => {
      let rows = [];

      let rowCount = 0;
      let row = [];
      for(let i = 0; i < data.length; i++) {
        if(i > 0 && i % 5 === 0) {
          rows.push(<tr key={rowCount+=1}>{row}</tr>);
          row = [];
        }
        row.push(<td id={data[i].id} onClick={this.toProject}>{data[i].title}</td>);
      }
      rows.push(<tr key={rowCount+=1}>{row}</tr>);

      return rows;
    };

    if(this.state["data"].length < 1) {
      return <Loading />;
    } else {
      return (
        <div>
          <h1>Projects</h1>
          <table className="table project_table">
            <thead>
            </thead>
            <tbody>
              {rows(this.state["data"])}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Projects;
