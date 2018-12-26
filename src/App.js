import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Header from './components/Header';
import RoutesInput from './components/Input';
class App extends Component {
  render() {
    return (
      <div>
        <div className="Header">
         <Header/>
        </div>
        <div className="App">
         <RoutesInput/>
        </div>
      </div>
    )
  }
}

export default App;
