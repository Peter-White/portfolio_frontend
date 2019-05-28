import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import DosBoxx from './components/dosBoxx';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <DosBoxx />
      </div>
    );
  }
}

export default App;
