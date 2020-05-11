import React, {Component} from 'react'
import './index.css';

class Error extends Component {
  render () {
    return(
      <div className="container">
        <div className="row">
            <div className="col-md-12">
              <h1>Error:</h1>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>{this.props.message}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
