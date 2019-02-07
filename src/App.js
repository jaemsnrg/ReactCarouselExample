import React, { Component } from 'react';
import Carousel from './components/carousel';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Carousel />
        </header>
      </div>
    );
  }
}

export default App;
