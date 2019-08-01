import React, { Component } from 'react';
import './index.css';

class Help extends Component {

  render() {
    return(
      <div className="row cell">
        <div className="col-md-6">
        <table>
          <tbody>
            {
              Object.keys(this.props.commands)[0] &&
              Object.keys(this.props.commands).map((command, index) =>
                <tr key={index}>
                  <td className="command">{command}</td>
                  <td className="description">{this.props.commands[command][1]}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Help;
