import React, { Component } from 'react';
import './index.css';

class Error extends Component {
  render() {
    return (
      <div class="row cell">
        <div class="col-md-12">
          <h4>'{this.props.command}' not recognized</h4>
        </div>
      </div>
    );
  }
}

export default Error;
