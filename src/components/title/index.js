import React, { Component } from 'react';
import './index.css';

class Title extends Component {
  render() {
    return(
      <div className="row cell title">
        <div className="col-md-12">
          <p>Welcome to my profile internet webpage powered by Microthought DubiOS [version 10.34.70]</p>
        </div>
        <div className="col-md-12">
        {
          localStorage.getItem("token") ?
          <p>You are already logged in</p>
          :
          <p>Please log in to your account by entering "login" or register a new account by entering "register" to create a new account to access all the features on this internet website application.</p>
        }
        </div>
        <div className="col-md-12">
          <p>Enter "help" for help</p>
        </div>
      </div>
    );
  }
}

export default Title
