import React from "react";
import "../style/HeroImage.css";

export default function HeroImage ({ source }) {
      return (
          <div className="heroimage">
      <img className="img" src={source} alt="team-images" />

    </div>
  )
}
