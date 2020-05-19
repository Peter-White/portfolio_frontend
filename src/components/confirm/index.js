import React, {Component} from 'react'
import './index.css';

class Confirm extends Component {
  constructor(props){
    super(props);
    this.state = {
      "code" : "",
      "error" : ""
    }
  }

  handleKeyPress = (e) => {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === 13) {
      this.submitCode();
    }
  }

  changeCode = (e) => {
    this.setState({ "code" : e.target.value.toUpperCase() });
  }

  submitCode = async () => {
    let failed = await this.props.submitCode(this.state["code"]);

    if(failed) {
      this.props.sendError(failed[Object.keys(failed)[0]]);
    }
  }

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
          <div className="col-md-5 offset-md-3">
            <input id="confirm_input" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" maxLength="6" onChange={this.changeCode} onKeyPress={this.handleKeyPress} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="button" onClick={this.submitCode} className="btn btn-success submit-btn">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
