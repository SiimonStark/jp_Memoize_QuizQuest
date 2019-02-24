import React, { Component } from 'react';
import LandingPage from './Components/LandingPage';

export default class App extends Component {
  constructor() {
    super();
    this.state= {}
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}