import React, {Component} from 'react';
import './index.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };
  }

  confirmLogin = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="loginForm" onSubmit={this.confirmLogin}>
              <div className="form-group">
                <label htmlFor="emailInput">Electronic Internet Mail Address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
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
