import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <p>
          <code>Get Employee Details</code>
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          //target="_blank"
          href="https://augmentolabs.com/"
          target="https://augmentolabs.com/"
          rel="noopener noreferrer"
        >
          Augmento Labs
        </a>
      </header>
    </div>
  );
}

export default App;
