import "../styles/blogs.css";

import React, { Component } from "react";
import BlogCard from './BlogCard';
import Header from "./Header";

class Blogs extends Component {
  render() {
    return (
      <div style={{"marginBottom":"40px"}}>
        <Header text="Blogs"/>
      <div className="container" style={{ display: "flex" }}>
        <BlogCard
          title="Tips for successful remote collaboration"
          author=""
          slug="#"
          thumb="./assets/blogs/blog1.png"
        />
        <BlogCard
          title="The benefits of upskilling"
          author=""
          slug="#"
          thumb="./assets/blogs/upskilling.png"
        />
        <BlogCard
          title="An inside look at the life of a GSDC Member"
          author=""
          slug="#"
          thumb="./assets/team.png"
        />
      </div>
      </div>
    );
  }
}

export default Blogs;

