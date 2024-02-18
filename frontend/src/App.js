import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup'; 
import Sidebar from './components/Sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
                  <Sidebar />

        <header className="App-header">
          <Signup />
        </header>
      </div>
    );
  }
}

export default App;
