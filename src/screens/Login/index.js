import React from 'react';
import logo from './../../assets/images/logo.svg';
import './index.css';

import Service from './service';

function Login() {

  const service = new Service()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login
        </p> 
      </header>
    </div>
  );
}

export default Login;
