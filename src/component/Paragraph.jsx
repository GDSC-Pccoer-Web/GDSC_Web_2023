import React from "react";
import "../styles/about-community.css";

export default function Paragraph({ text }) {
  return (
    <div>
      <div className="about-community-text">{ text }</div>
    </div>
  );
}
