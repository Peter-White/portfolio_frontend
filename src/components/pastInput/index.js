import React, { Component } from 'react';
import './index.css';

class PastInput extends Component {
  render() {
    return(
      <div class="row cell command">
        <div class="col-md-12">
          <p>
            <span class="user">{this.props.username}&gt;</span>&nbsp;
            <span class="command">{this.props.command}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default PastInput;
