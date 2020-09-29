import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Root from './Root';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Root />
    </Router>
  );
}

export default App;
