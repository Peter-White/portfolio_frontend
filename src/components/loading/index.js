import React, {Component} from 'react'
import './index.css';

class Loading extends Component {
  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>
              <span className="verticle">|</span>
              <span className="right">/</span>
              <span className="horizontal">-</span>
              <span className="left">\</span>
              <span className="loading"> Loading </span>
              <span className="verticle">|</span>
              <span className="right">/</span>
              <span className="horizontal">-</span>
              <span className="left">\</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
