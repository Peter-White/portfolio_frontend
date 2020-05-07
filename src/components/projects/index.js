import React, { Component } from 'react';
import './index.css';
import backend from "../../apis/backend";

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

  render() {
    return (
      <div>
        <h1>Projects</h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>URL</th>
                <th>GitHub</th>
              </tr>
            </thead>
            <tbody>
              {this.state["data"].map((data) => {
                return(<tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.url}</td>
                  <td>{data.github}</td>
                </tr>)
              })}
            </tbody>
          </table>
      </div>
    );
  }
}

export default Projects;
