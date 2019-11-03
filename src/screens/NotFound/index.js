import React from 'react';
import logo from './../../assets/images/logo.svg';
import './index.css';

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page not found <span role="img">😕</span>
        </p> 
      </header>
    </div>
  );
}

export default NotFound;
