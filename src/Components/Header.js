import React, { Component } from 'react';
class Header extends Component {
    render() {
      return (
        <div id="banner">
          <h1>The Grocery App 🛒</h1>
          <div id="mySidenav" className="sidenav">
            <a href="login.js" id="login">Login</a>
            <a href="Grocery History.js" id="history">Grocery History</a>
            <a href="New List.js" id="list">New List</a>
            <img src={require('./Images/walmart_pic.jpg')} alt="walmart"/>
          </div>
        </div>
      );
    }
  }
  
  export default Header;