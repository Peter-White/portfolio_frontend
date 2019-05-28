import React, { Component } from 'react';
import './index.css';

class Title extends Component {
  render() {
    return(
      <div className="title">
        <div className="col-md-12">
          <p>Microthought DubiOS [version 10.34.70]</p>
        </div>
        <div className="col-md-12">
          <p>Enter "help" for help</p>
        </div>
      </div>
    );
  }
}

export default Title
