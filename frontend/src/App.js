import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './components/Login'; 
import Signup from './components/Signup';
import Home from './components/Home'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: {
      default: 'rgba(240, 244, 253, 1)', // Set the default background color
    },
  },
  typography: {
    fontFamily: [
      'Roboto', // Use Roboto font
      'sans-serif',
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
                  <Sidebar />

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
      </ThemeProvider>
    );
  }
}

export default App;
