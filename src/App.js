import { Navigate, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import About from "./about/components/about-us/About";
import Blogs from "./blog/components/blog/Blog";
import Events from "./events/components/Events";
import Faq from "./events/components/FAQ";
import Footer from "./events/components/Footer";
import Home from "./home/App";
import Navbar from "./events/components/Navbar";
import Teams from "./components/teams";

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/team" element={<Teams/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
