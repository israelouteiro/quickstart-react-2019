import React from 'react';
import logo from './../../assets/images/logo.svg';
import './index.css';

import Connect from "./../../context/connect";
import { DecrementCounter, IncrementCounter } from "./../../context/counter";

function Home(props) {

  const DecrementCounterHandler = () => props.dispatch(DecrementCounter());
  const IncrementCounterHandler = () => props.dispatch(IncrementCounter());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home
        </p> 

        <div>
          <button
            aria-label="Menos 1"
            className="btn"
            onClick={DecrementCounterHandler}
          >
            -
          </button>
          <small>{ props.counter }</small>
          <button
            aria-label="Mais 1"
            className="btn"
            onClick={IncrementCounterHandler}
          >
            +
          </button>
        </div>


      </header>
    </div>
  );
}

const mapStateToProps = ({ counter }, props) => {
  return {
    counter,
    ...props
  };
};

export default Connect(mapStateToProps)(Home);
