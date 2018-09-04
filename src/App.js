import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content.js';
import Header from './components/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Content/>


      </div>
    );
  }
}

export default App;
