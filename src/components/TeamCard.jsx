import "../style/teamCard.css";

import React from "react";

export default function TeamCard ({ name, position, source }) {
      return (
          <div className="card">
      <img className="propic" src={source} alt="team-images" />

      <div className="info">
        <div className="overlay">
          <p>{position}</p>
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  )
}
