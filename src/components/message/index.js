import React, { Component } from 'react';
import './index.css';

class Message extends Component {
  render() {
    return (
      <div className="row cell">
        <div className="col-md-12">
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}

export default Message;
