import React, {Component} from 'react'
import axios from 'axios';

class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      "data" : []
    };
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/skills")
      .then(res => {
        this.setState({"data":res.data});
      });
  }

  render () {
    return(
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
    );
  }
}

export default Skills;
