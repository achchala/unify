import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'; 
import Signup from './components/Signup';
import Home from './components/Home'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
