import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Counter from "../components/counter";
import UpdateName from '../components/UpdateName'
import useStore from '../utils/state';


function App() {
const {user} = useStore();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UpdateName/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Counter/>
      {user}
      </header>
    </div>
  );
}

export default App;
