import React, {Component} from 'react';
import './index.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };
  }

  confirmLogin = async (e) => {
    e.preventDefault();

    let formData = {};
    let errors = [];

    if(e.target.email.value === "") {
      errors.push("Electronic Internet Super-Mail address is required");
    } else {
      formData["email"] = e.target.email.value;
    }

    if(e.target.password.value === "") {
      errors.push("password is required");
    } else {
      formData["password"] = e.target.password.value;
    }

    if(errors.length > 0) {
      this.setState({ errors : errors });
    } else {
      let message = await this.props.handleLogin(formData);

      if(message === "error001") {
        errors.push("Electronic Internet Super-Mail address or Password not valid");
        this.setState({ errors : errors });
      }

      if(message === "error002") {
        errors.push("Your account is not validated. Sending a new access code to your Electronic Internet Super-Mail address");
        this.setState({ errors : errors });
      }
    }
  };

  render () {
    return(
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Login</h1>
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
            <form className="loginForm" onSubmit={this.confirmLogin}>
              <div className="form-group">
                <label htmlFor="emailInput">Electronic Internet Super Mail Address</label>
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
