import React from "react";
import "./Events.css";
import flutter from "../imges/flutter.png"
import cloud from "../imges/cloud.png"
import camp from "../imges/camp.png"
import ml from "../imges/ml.png"

 function Events () {
  return (<>    <div className="wrapper">
    <div className="row">
<time datetime="2014-09-20" className="icon" style={{backgroundImage:{flutter},display:"block"}}>
  <em>2 P.M @ lab503</em>
  <strong>25/2/2023</strong>
  <span>Flutter</span>
</time></div>
<div className="row">

 <button className="register-btn">REGISTER</button>
 </div><div className="row">

 <div className="card">
  <img src={cloud} alt="Avatar" style={{width:"100%"}}/>
  <div className="container">
  </div>
</div></div>
<div className="row">
<div className="card">
  <img src={camp} alt="Avatar" style={{width:"100%"}}/>
  <div className="container">
  <h4><b>Compose Camp</b></h4>
  </div>
</div></div>
<div className="row">
<div className="card">
  <img src={ml} alt="Avatar" style={{width:"100%"}}/>
  <div className="container">
  <h4><b>ML Study Camp</b></h4>
  </div>
</div></div>
</div>
 </>);
};

export default Events;
