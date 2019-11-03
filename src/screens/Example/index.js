import React from 'react';
import logo from './../../assets/images/logo.svg';
import './index.css';

import Service from './service';

function Example() {

  const service = new Service()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example
        </p> 
      </header>
    </div>
  );
}

export default Example;
