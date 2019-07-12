import React, { Component } from 'react';
import './index.css';

class PastInput extends Component {
  render() {
    return(
      <div className="row cell">
        <div className="col-md-12">
          <p className="command">{this.props.pastInput}</p>
        </div>
      </div>
    );
  }
}

export default PastInput;
