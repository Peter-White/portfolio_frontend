import React, {Component} from 'react'
import './index.css';

class Confirm extends Component {
  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Confirm</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>An Electronic Super-Mail Letter has been sent to your Electronic Super-Mail address. Please enter the registration code contatined in the input prompt (not the command prompt) below</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input id="confirm_input" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" maxlength="6"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
