import React, {Component} from 'react'
import './index.css';

class Loading extends Component {
  render () {
    return(
      <div className="container error">
        <div className="row">
          <div className="col-md-12">
            <h1>Loading</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
