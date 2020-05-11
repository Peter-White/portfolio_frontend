import React, {Component} from 'react'
import './index.css';

class Command extends Component {

  handleKeyPress = (e) => {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      this.props.inputReturn(e.target.value);
      e.target.value = "";
    }
  }

  render () {
    return(
      <div className="row command">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="path">Test></span>
              </div>
              <input type="text" onKeyPress={this.handleKeyPress} className="form-control" id="command-input" autoComplete="off" aria-describedby="basic-addon3"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Command;
