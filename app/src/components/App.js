import React, { Component } from 'react';
import '../css/App.css';
import Header from '../components/Header';
import HomePage from '../components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Content">
          <HomePage/>
        </div>
      </div>
    );
  }
}

export default App;
