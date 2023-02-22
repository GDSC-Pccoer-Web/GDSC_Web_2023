import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <div>
        <section className="section section--contact" id="section--5">
          <div className="section__title">
            <h2 className="section__description" style={{ color: "#367CFF" }}>
              Contact Us
            </h2>
            <h3 className="section__header">
              Feel free to keep in touch with us!
            </h3>
          </div>
          <div className="contact">
            <form className="contact__form">
              <div className="form-input__group">
                <div className="form__group">
                  <label className="form__label" htmlFor="name">
                    Name *
                  </label>
                  <input
                    className="form__input"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="phone">
                    Phone *
                  </label>
                  <input
                    className="form__input"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone"
                    required=""
                    maxLength="10"
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>
              <div className="form-input__group">
                <div className="form__group">
                  <label className="form__label" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="form__input"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="form__input"
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    maxLength="50"
                  />
                </div>
              </div>
              <div className="form__group form__group--last">
                <label className="form__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form__input"
                  id="message"
                  type="text"
                  placeholder="Message"
                  maxLength="1500"
                ></textarea>
              </div>
              <button
                className="btn form__submit"
                type="submit"
                style={{ background: "#367CFF" }}
              >
                Send Message Now <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Faq;
