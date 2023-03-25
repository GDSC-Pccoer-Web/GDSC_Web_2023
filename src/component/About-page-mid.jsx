import React, { Component } from "react";
import "../styles/about-page-mid.css";

class AboutPageMid extends Component {
  state = {};
  render() {
    return (
      <div className="about-page-mid">
        <div><img className="about-page-mid-icon" alt="" src="../loan-approved.svg" /></div>
        <div><button className="about-page-mid-btn" >Know More</button></div>
      </div>
    );
  }
}

export default AboutPageMid;
