import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home.jsx'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Home></Home>
      </div>
    </HashRouter>
  );
}

export default App;
