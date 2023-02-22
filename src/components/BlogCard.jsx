import React from "react"
import { Link } from "react-router-dom";
import "../styles/blogCard.css";

export default function BlogCard({title, author, slug, thumb}) {
    return (
        <Link to={"/blogs/" + slug} key={title}>
            <div className="blog-card">
                <img src={thumb} />
                <div className="blog-card-body">
                <h2>{title}</h2>
                <h4>- {author}</h4>
                </div>
          </div>
        </Link>
    )
  }
  
 