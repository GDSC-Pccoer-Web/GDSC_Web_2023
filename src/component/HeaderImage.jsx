import React from "react";
import "../styles/header-image.css";

export default function HeaderImage({src}) {
    return <div className="header-img"><img src={src.toString()} /></div>;
}


