import React from 'react';
import './index.css';

class LogOut extends React.Component {

  componentWillMount() {
    this.props.handleLogOut();
  }

  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>You are now logged out</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LogOut;
