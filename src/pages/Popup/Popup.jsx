import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/options.html" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to checkout the Options Page!
        </a>
      </header>
    </div>
  );
};

export default Popup;
