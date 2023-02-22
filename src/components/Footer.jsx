import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <img className="footer__logo" src="/images/logo.png" alt="Logo" />
          <p className="footer__note">
            Made with <img src="/images/heart.webp.webp" alt="heart" />
            by GDSC PCCOER
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
