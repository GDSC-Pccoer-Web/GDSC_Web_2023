import React from "react";
import "./Footer.css";
import img from "../imges/gdsc_logo_pccoer.png";
import linkedinI from "../imges/linkedin.png";
import twitterI from "../imges/twitter.png";
import youtubeI from "../imges/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img style={{ height: "4rem" }} src={img} alt="image" />
        <h4
          style={{
            color: "yellow",
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "2rem",
            width: "53%",
          }}
        >
          Follow Us{" "}
        </h4>
        <ul className="socials">
          {/* <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li> */}
          <li>
            <a href="https://twitter.com/googledevs">
              <img style={{ height: "2rem" }} src={twitterI} alt="" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li> */}
          <li>
            <a href="https://www.youtube.com/playlist?list=PLOU2XLYxmsIL5MoZ5LrrxfVk3V04evsMm">
              <img style={{ height: "2rem" }} src={youtubeI} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/25013385/">
              <img style={{ height: "2rem" }} src={linkedinI} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
