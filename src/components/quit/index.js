import React, { Component } from 'react';
import './index.css';
import './period.css'

class Quit extends Component {
  render() {
    return(
      <div class="row cell">
        <div class="col-md-12">
          <h4>
            quitting
            <span class="period1">.</span>
            <span class="period2">.</span>
            <span class="period3">.</span>
          </h4>
        </div>
      </div>
    );
  }
}

export default Quit;
