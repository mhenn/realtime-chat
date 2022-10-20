import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Switch from './Routes';



function App() {
  return (
    <div className="App">
      <header className="">
      </header>
      <Router basename="/">
        <Switch/>
      </Router>
    </div>
  );
}

export default App;
