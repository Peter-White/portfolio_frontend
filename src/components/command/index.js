import React, {Component} from 'react'
import './index.css';

class Command extends Component {

  handleKeyPress = (e) => {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === 13) {
      this.props.inputReturn(e.target.value);
      e.target.value = "";
    }
  }

  render () {
    let name = "";
    if(Object.keys(this.props.data).length > 0) {
      name = this.props.data["name"];
    } else {
      name = "Guest";
    }

    return(
      <div className="row command">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="path">{name}></span>
              </div>
              <input type="text" onKeyPress={this.handleKeyPress} className="form-control" id="command-input" autoComplete="off" aria-describedby="basic-addon3"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Command;
