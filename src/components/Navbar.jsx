import "../styles/navbar.css";

import React, { Component } from "react";

class Navbar extends Component {
    render() {
    return (
      <div>
        <header className="header">
          <nav className="nav">
            <div className="nav__name">
              <img
                className="nav__logo"
                id="logo"
                src="/images/logo.png"
                alt="Bankist logo"
              />
              <p>GDSC PCCOER</p>
            </div>
            <ul className="nav__links">
              <li className="nav__item">
                <a className="nav__link" href="#about">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#events">
                  Events
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#blogs">
                  Blogs
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <a
              className="nav__link--btn section--hidden"
              href="#section--2.html"
            >
              <i className="fa-solid fa-calendar"></i>
            </a>
          </nav>
          <div className="top_progress_bar"></div>
          <div className="header__title">
            <div>
              <h1>
                Welcome to <br /> GDSC PCCOER
              </h1>
              <button className="btn--text btn--scroll-to section--hidden">
                Know more <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
            <img className="image" src="/images/logo.png" alt="" />
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
