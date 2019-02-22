import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteContainer from './components/QuoteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Random quote generator</h1>
        <p>Lets ready </p>
        <QuoteContainer />

      </div>
    );
  }
}

export default App;
