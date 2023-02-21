import React from "react";
import img from "../imges/favicon.ico";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <img src={img} alt="image" />
        <ul id="navId" className="navbar-nav mr-auto">
          <li id="navLi" className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li id="navLi" className="nav-item active">
            <a className="nav-link" href="#">
              About Us <span className="sr-only">(current)</span>
            </a>
          </li>
          <li id="navLi" className="nav-item active">
            <a className="nav-link" href="/Events">
              Events <span className="sr-only">(current)</span>
            </a>
          </li>
          <li id="navLi" className="nav-item active">
            <a className="nav-link" href="#">
              Team <span className="sr-only">(current)</span>
            </a>
          </li>
          <li id="navLi" className="nav-item active">
            <a className="nav-link" href="#">
              Blogs <span className="sr-only">(current)</span>
            </a>
          </li>
          <li id="navLi" className="nav-item active">
            <a className="nav-link" href="/FAQ">
              FAQ's <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
