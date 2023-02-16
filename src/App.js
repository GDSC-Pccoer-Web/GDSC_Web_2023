import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Teams from "./components/teams";
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Faq from "./components/faq";
import Blogs from "./components/blogs";
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/" element={<Teams/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
