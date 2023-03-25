import React, { Component } from 'react';
import "../styles/navbar.css";

class Navbar extends Component {
    render() { 
        return (<div className='navbar-div'>
            <div><img className="logo-1-icon4" alt="" src="/logo-1@2x.png" /></div>
                  <div className='navbar-div-options'>
                      <div><a href="/">Home</a></div>
                      <div><a href="/about">About us</a></div>
                      <div><a href="/events">Events</a></div>
                      <div><a href="/teams">Team</a></div>
                      <div><a href="/blogs">Blogs</a></div>
                      <div><a href="/faq">Faq</a></div>
                  </div>
        </div>);
    }
}
 
export default Navbar;