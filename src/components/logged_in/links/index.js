import React, { Component } from 'react';
import './index.css';

class Links extends Component {
  render() {
    return(
      <div className="row cell">
        <div className="container link-container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Welcome to MY LINKS [ now with Clickability<i className="fas fa-trademark"></i> ]</h3>
              <div className="row cell">
                <div className="col-md-4 link"><a href="https://www.linkedin.com/in/peterallanwhite/"><i className="fab fa-linkedin"></i></a></div>
                <div className="col-md-4 link"><a href="https://github.com/Peter-White"><i className="fab fa-github"></i></a></div>
                <div className="col-md-4 link"><a href="http://www.mistahwhite.info"><i className="fas fa-link"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
