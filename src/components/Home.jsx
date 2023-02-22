import React, { Component } from "react";

import About from "./About";
import Blogs from "./Blogs";
import Events from "./Events";
import Faq from "./Faq";
import Teams from "./teams";

class Home extends Component {
  componentDidMount(){
    document.title = "GDSC PCCOER";
  }
  render() {
    return (
      <React.Fragment>
        <div id="about"><About/></div>
        <div id="events"><Events/></div>
        <div id="team"><Teams /></div>
        <div id="blogs"><Blogs/></div>
        <div id="contact"><Faq/></div>
      </React.Fragment>
    );
  }
}

export default Home;
