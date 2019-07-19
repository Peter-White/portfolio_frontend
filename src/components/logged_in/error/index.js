import React, { Component } from 'react';
import './index.css';

class Error extends Component {
  render() {
    return (
      <div className="row cell">
        <div className="col-md-12">
          <h4>'{this.props.command}' not recognized</h4>
        </div>
      </div>
    );
  }
}

export default Error;
