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
    backend.get(`http://localhost:5000/api/skills/`).then((res) => {
      this.setState({"data" : res.data});
    });
  }

  render () {
    return(
      <div>
        <h1>Skills</h1>
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
    );
  }
}

export default Skills;
