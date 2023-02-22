import React, { Component } from 'react'
import Header from "./Header";
import "../styles/about.css";

class About extends Component {
    render() { 
        return (
          <div>
            <Header text="About the Community" />
            <div className="about-section">
              <img className='center' src="/images/logo.png" alt="" />
              <p style={{"margin-right": "140px"}}>
                If you love to code and develop, you are welcome to the world of
                Google Developer Technologies! GDSC provides you a platform to
                enhance your technical skills through our free hands-on
                workshops, study-jams and project building activities. We work
                together as a team to build inspiring solutions to solve
                real-world problems. Not only this, top performers also get a
                chance to win swags and goodies! Join us and let's begin this
                journey of learning and growing together as a community!
              </p>
            </div>
          </div>
        );
    }
}
 
export default About;
