import React from 'react';
import logo from './logo.svg';
import './App.css';
import puce from './puce.jpg'
import visa from './visa.jpg'


function App() {
  return (
    <div className="App">
     <h1 class="titre ">CREDIT CARD</h1>
      <img className="puce" src={puce}></img>

      <div className="container">

        <div className="container-2">

          <p className="num">7253  3256  7895  1245</p>
          <p className="date">MONTH/YEAR</p>

          <div className="l-2-horizontal">
            <p className="date-2">5422</p>

            <div className="box-right">
              <p className="validation">VALID<br />THRU</p>
              <i class="fas fa-caret-right" ></i>
              <p className="date-2">11/50</p>
            </div>

          </div>

          <p className="sous-titre">CARDHOLDER</p>

        </div>

        <img className="visa" src={visa} ></img>

      </div>

    </div>
  );
}

export default App;