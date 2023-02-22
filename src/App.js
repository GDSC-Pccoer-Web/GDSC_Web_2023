import { Navigate, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
