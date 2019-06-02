import React, { Component } from 'react';
import './index.css';

class PastInput extends Component {
  render() {
    return(
      <div class="row cell">
        <div class="col-md-12">
          <p class="command">{this.props.pastInput}</p>
        </div>
      </div>
    );
  }
}

export default PastInput;
