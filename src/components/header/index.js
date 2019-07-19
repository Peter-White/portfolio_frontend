import React, { Component } from 'react';
import './index.css';
import './neon.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="top-container" onClick={this.props.handleLogOut}>
          <div className="neon"><h1>Peter</h1></div>
          <div className="flux"><h1>White</h1></div>
        </div>
      </header>
    );
  }
}

export default Header;
