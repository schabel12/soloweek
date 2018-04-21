import React from 'react';
import logo from './foodieLogo.png';
import settingsIcon from './settings_icon.png';
import {
    Route,
    Link,
    BrowserRouter as Router,
  } from 'react-router-dom';

const Nav = (props) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Foodie Food Reviews</h1>
        <div className="App-search">
          <input value={props.term} onChange={props.change} ></input>
            <button onClick={props.search}><Link to="/products">Search for Food</Link></button>
        </div>
        <div className="settings">
            <Link to="/user_settings"></Link>
        </div>
        <div>
            <Link to="/user_settings"><img src={settingsIcon} className="settings-logo"/></Link>
        </div>
      </header>
    </div>
)

export default Nav;