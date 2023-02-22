import "../styles/teamCard.css";

import React from "react";

export default function TeamCard ({ name, position, source }) {
      return (
        <div className="card-team">
          <img className="propic-team" src={source} alt="team-images" />

          <div className="info-team">
            <div className="overlay-team">
              <p>{position}</p>
              <h1>{name}</h1>
            </div>
          </div>
        </div>
      );
}
