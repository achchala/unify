import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Signup />
        </header>
      </div>
    );
  }
}

export default App;
