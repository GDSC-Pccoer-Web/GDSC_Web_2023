import Header from './Header';
import Slider from "react-slick";
import styles from "../styles/Events.css";

export default function Events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    dotsClass: "slick-dots " + styles.dots,
  };
  return (
    <div className={styles.sliderContainer}>
      <Header text="Events" />
      <Slider {...settings}>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose1.jpg" alt="" />
        </div>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose2.jpg" alt="" />
        </div>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose4.jpg" alt="" />
        </div>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose5.jpg" alt="" />
        </div>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose6.jpg" alt="" />
        </div>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose7.jpg" alt="" />
        </div>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose8.jpg" alt="" />
        </div>
        <div className="events-div">
          <img className="events-img" src="/assets/events/compose9.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
