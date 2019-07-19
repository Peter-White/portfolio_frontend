import React, { Component } from 'react';
import './index.css';

class Login extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Login to your DubiOS Account</h4>
            <h6>(Brought to you by Magiforms. Magically bringing you registry forms from the far future.)</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="loginForm" onSubmit={this.props.handleLogin}>
              <div className="form-group">
                <label for="emailInput">Electronic Internet Mail Address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" name="email" />
              </div>
              <div className="form-group">
                <label for="passwordInput">Password</label>
                <input type="password" className="form-control" id="passwordInput"
name="password" />
              </div>
              <button type="submit" className="btn btn-primary login-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
