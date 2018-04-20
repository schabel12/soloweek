import React from 'react';
import logo from './foodieLogo.png';


const Nav = (props) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Foodie Food Reviews</h1>
        <div className="App-search">
          <input value={props.term} onChange={props.change(value)}></input>
          <button onClick={props.search}>Search for Food</button>
        </div>
      </header>
    </div>
)

export default Nav;