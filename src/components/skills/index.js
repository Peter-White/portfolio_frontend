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

  render () {

    const rows = () => {
      const keys = Object.keys(this.state["data"]);
      let max = 0;
      keys.forEach((key) => {
        max = (this.state["data"][key].length > max) ? this.state["data"][key].length : max;
      });

      let rows = [];

      for(let i = 0; i < max; i++) {
        let rowData = [];

        if(this.state["data"]["database"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["database"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        if(this.state["data"]["environment"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["environment"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        if(this.state["data"]["expertise"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["expertise"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        if(this.state["data"]["framework"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["framework"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        if(this.state["data"]["language"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["language"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        if(this.state["data"]["library"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["library"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        if(this.state["data"]["platform"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["expertise"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        if(this.state["data"]["tool"].length-1 >= i) {
          rowData.push(<td>{this.state["data"]["tool"][i]["title"]}</td>);
        } else {
          rowData.push(<td></td>);
        }

        rows.push(<tr>{rowData}</tr>);
      }

      return rows;
    };

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Skills</h1>
          </div>
        </div>
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Database Tools</th>
                <th scope="col">Environment</th>
                <th scope="col">Expertise</th>
                <th scope="col">Framework</th>
                <th scope="col">Language</th>
                <th scope="col">Library</th>
                <th scope="col">Platform</th>
                <th scope="col">Tool</th>
              </tr>
            </thead>
            <tbody>
              {rows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Skills;
