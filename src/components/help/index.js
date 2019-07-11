import React, { Component } from 'react';
import './index.css';

class Help extends Component {
  constructor() {
    super();

  }
  render() {
    return(
      <div className="row cell">
        <div className="col-md-6">
          <ul>
            {
              Object.keys(this.props.commands)[0] &&
              Object.keys(this.props.commands).map(key =>
                <li><p>{key} - {this.props.commands[key]}</p></li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Help;
