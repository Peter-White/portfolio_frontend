import React, { Component } from 'react';
import './index.css';

class Register extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Register a new DubiOS Account</h4>
            <p>(Brought to you by Magiforms. Magically bringing you registry forms from the far future.)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="registryForm" onSubmit={this.props.handleRegisterForm}>
              <div className="form-group">
                <label for="first_nameInput">First Name</label>
                <input type="text" className="form-control" id="first_nameInput" aria-describedby="first_nameHelp" name="first_name" />
              </div>
              <div className="form-group">
                <label for="last_nameInput">Last Name</label>
                <input type="text" className="form-control" id="last_nameInput" aria-describedby="last_nameHelp" name="last_name" />
              </div>
              <div className="form-group">
                <label for="companyInput">Company</label>
                <input type="text" className="form-control" id="companyInput" aria-describedby="companyHelp" name="company" />
              </div>
              <div className="form-group">
                <label for="username">Username</label>
                <input className="form-control" type="text" name="username" id="usernameInput" aria-describedby="usernameHelp" />
              </div>
              <div className="form-group">
                <label for="emailInput">Electronic Internet Mail Address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" name="email" />
              </div>
              <div className="form-group">
                <label for="passwordInput">Password</label>
                <input type="password" className="form-control" id="passwordInput"
name="password" />
              </div>
              <button type="submit" className="btn btn-primary register-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
