import React, {Component} from 'react';
import './index.css';

class Help extends Component {

  render () {
    const content = () => {
      if(this.props.logged) {
        return(
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4>You are logged in. Please enter one of the following commands listed in the console terminal below:</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table class="table command-table">
                  <thead>
                    <tr>
                      <th scope="col">Command</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>help</td>
                      <td>Come back to this screen to see all available commands</td>
                    </tr>
                    <tr>
                      <td>projects</td>
                      <td>See all the projects I've created so far; details and links included</td>
                    </tr>
                    <tr>
                      <td>skills</td>
                      <td>See all the skills I specialize in and the projects used with them</td>
                    </tr>
                    <tr>
                      <td>history</td>
                      <td>Read about my work history and everything that's lead to now</td>
                    </tr>
                    <tr>
                      <td>logout</td>
                      <td>Log out of your DubiOS account</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      } else {
        return(
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4>You are not logged in so you are operating under Guest. Please enter one of the following commands listed in the console terminal below to operate under your account:</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="table command-table">
                  <thead>
                    <tr>
                      <th scope="col">Command</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>help</td>
                      <td>Come back to this screen to see all available commands</td>
                    </tr>
                    <tr>
                      <td>login</td>
                      <td>Login to your existing Dubious account</td>
                    </tr>
                    <tr>
                      <td>register</td>
                      <td>Register a new DubiOS account</td>
                    </tr>
                    <tr>
                      <td>confirm</td>
                      <td>Confirm your registered account</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }
    };

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>MicroThought DubiOS presents:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 id="inTitle">
              <span className="letterP1">P</span>
              <span className="letterE1">e</span>
              <span className="letterT1">t</span>
              <span className="letterE2">e</span>
              <span className="letterR">r</span>
              <span className="space1"> </span>
              <span className="letterW">W</span>
              <span className="letterH">h</span>
              <span className="letterI1">i</span>
              <span className="letterT2">t</span>
              <span className="letterE3">e</span>
              </h1>
            <h1 id="inTitle">
              <span className="letterP2">P</span>
              <span className="letterO1">o</span>
              <span className="letterR">r</span>
              <span className="letterT3">t</span>
              <span className="letterF">f</span>
              <span className="letterO2">o</span>
              <span className="letterL">l</span>
              <span className="letterI2">i</span>
              <span className="letterO2">o</span>
              <span className="space2"> </span>
            </h1>
          </div>
        </div>
        <div className="row">
          {content()}
        </div>
      </div>
    );
  }
}

export default Help;
