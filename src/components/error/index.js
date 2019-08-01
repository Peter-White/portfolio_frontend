import React, { Component } from 'react';
import './index.css';

class Error extends Component {
  render() {
    return (
      <div className="row cell">
        <div className="col-md-12">
          <p>'{this.props.command}' not a recognized or available command</p>
        </div>
      </div>
    );
  }
}

export default Error;
