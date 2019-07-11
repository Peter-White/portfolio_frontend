import React, { Component } from 'react';
import './index.css';

class Login extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="loginForm">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
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
