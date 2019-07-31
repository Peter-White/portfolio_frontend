import React, { Component } from 'react';
import './index.css';

class Command extends Component {
  render() {
    return(
      <div className="row cell command">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="path">{this.props.data.username}></span>
              </div>
              <input type="text" onKeyPress={this.props.inputReturn} className="form-control" id="command-input" autoComplete="off" aria-describedby="basic-addon3"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Command;
