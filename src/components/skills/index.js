import React, {Component} from 'react'
import './index.css';
import backend from "../../apis/backend";

class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      "data" : []
    };
  }

  componentDidMount(){
    backend.get(`skills`).then((res) => {
      this.setState({"data" : res.data});
    });
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Skills</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Year Started</th>
                </tr>
              </thead>
              <tbody>
                {this.state["data"].map((data) => {
                  return(<tr key={data.id}>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td>{data.year_started}</td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
