import "../styles/teamCard.css";

import React from "react";

export default function TeamCard ({ name, position, source, hide }) {
      return (
          <div className="card" id={hide}>
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
