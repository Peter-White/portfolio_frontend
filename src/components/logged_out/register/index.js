import React, { Component } from 'react';
import './index.css';
import SECRET_KEY from '../../../config.js';
let jwt = require('jsonwebtoken');

class Register extends Component {
  constructor() {
    super();

    this.state = {
      errors: []
    }
  }

  passRegistery = e => {
    e.preventDefault();

    let errors = [];

    this.setState({errors: errors});

    if(e.target.first_name.value === "") {
      errors.push("First Name required");
    }
    if(e.target.last_name.value === "") {
      errors.push("Last Name required");
    }
    if(e.target.company.value === "") {
      errors.push("Company required");
    }
    if(e.target.username.value === "") {
      errors.push("Username required");
    }
    if(e.target.email.value === "") {
      errors.push("Email required");
    }
    if(e.target.password.value === "") {
      errors.push("Password required");
    }
    if(e.target.confirmPassword.value === "") {
      errors.push("Confirm your password");
    }
    if(e.target.password.value !== e.target.confirmPassword.value) {
      errors.push("Passwords must match");
    }

    if(errors.length < 1) {
      let data = {
        "first_name":e.target.first_name.value,
        "last_name":e.target.last_name.value,
        "company":e.target.company.value,
        "username":e.target.username.value,
        "email":e.target.email.value,
        "password":e.target.password.value
      };
      this.validateRegistry(data["username"], data["email"]).then(check => {
        if(check) {
          this.props.handleRegisterFormData(data);
        } else {
          errors.push("Email or Username already registered");
          this.setState({errors:errors})
        }
      });
    } else {
      this.setState({errors:errors})
    }
  }

  validateRegistry = async(username, email) => {
    const URL = "http://localhost:5000/api/user";

    // encrypt a token with the requested email and username to check if their available
    let token = jwt.sign(
      { 'email': email, 'username': username },
      SECRET_KEY,
      { expiresIn: '1h' } // expires in 1 hour
    );

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });

    let data = await response.json();

    if(Object.keys(data).length < 1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Register a new DubiOS Account</h4>
            <p>(Brought to you by Magiforms. Magically bringing you registry forms from the far future.)</p>
            <ul>
              {
                this.state.errors[0] &&
                this.state.errors.map((error, index) =>
                  <li key={index}>{error}</li>
                )
              }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="registryForm" onSubmit={this.passRegistery}>
              <div className="form-group">
                <label htmlFor="first_nameInput">First Name</label>
                <input type="text" className="form-control" id="first_nameInput" aria-describedby="first_nameHelp" name="first_name" />
              </div>
              <div className="form-group">
                <label htmlFor="last_nameInput">Last Name</label>
                <input type="text" className="form-control" id="last_nameInput" aria-describedby="last_nameHelp" name="last_name" />
              </div>
              <div className="form-group">
                <label htmlFor="companyInput">Company</label>
                <input type="text" className="form-control" id="companyInput" aria-describedby="companyHelp" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" type="text" name="username" id="usernameInput" aria-describedby="usernameHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Electronic Internet Mail Address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input type="password" className="form-control" id="passwordInput"
name="password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPasswordInput">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPasswordInput"
name="confirmPassword" />
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
