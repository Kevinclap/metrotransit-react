import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Header from './components/Header';
import RoutesInput from './components/RoutesInput';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <RoutesInput/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App;
