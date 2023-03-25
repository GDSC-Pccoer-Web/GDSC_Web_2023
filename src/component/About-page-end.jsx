import React, { Component } from "react";
import "../styles/about-page-end.css";
class AboutPageEnd extends Component {
  render() {
    return (
      <div>
        <div className="about-page-end">
          <div className="about-page-end-div">
            <img className="" alt="" src="../head1.png" />
            <div className="about-page-end-title">40+</div>
            <div className="about-page-end-subtitle">Members</div>
          </div>
          <div className="about-page-end-div">
            <img className="" alt="" src="../head2.png" />
            <div className="about-page-end-title">30+</div>
            <div className="about-page-end-subtitle">Workshops</div>
          </div>
          <div className="about-page-end-div">
            <img className="" alt="" src="../head3.png" />
            <div className="about-page-end-title">1000+</div>
            <div className="about-page-end-subtitle">Participants</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPageEnd;
