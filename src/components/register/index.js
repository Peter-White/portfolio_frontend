import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };
  }

  confirmRegistery = (e) => {
    e.preventDefault();

    let formData = {};
    let errors = [];

    if(e.target.first_name.value === "") {
      errors.push("first_name is required");
    } else {
      formData["first_name"] = e.target.first_name.value;
    }

    if(e.target.last_name.value === "") {
      errors.push("last_name is required");
    } else {
      formData["last_name"] = e.target.last_name.value;
    }

    if(e.target.company.value === "") {
      errors.push("company is required");
    } else {
      formData["company"] = e.target.company.value;
    }

    if(e.target.email.value === "") {
      errors.push("email is required");
    } else {
      formData["email"] = e.target.email.value;
    }

    if(e.target.password.value === "") {
      errors.push("password is required");
    } else {
      formData["password"] = e.target.password.value;
    }

    if(e.target.confirmPassword.value === "") {
      errors.push("confirmPassword is required");
    } else {
      if(e.target.password.value !== e.target.confirmPassword.value) {
        errors.push("passwords must match");
      }
    }

    if(errors.length > 0) {
      this.setState({ errors : errors });
    } else {
      this.props.handleRegister(formData);
    }
  };

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Register</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              {
                this.state.errors.map((value, index) => {
                  return <li key={index}>{value}</li>
                })
              }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="registryForm" onSubmit={this.confirmRegistery}>
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
               <label htmlFor="emailInput">Electronic Internet Super Mail Address</label>
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
