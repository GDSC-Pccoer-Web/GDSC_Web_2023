import Header from './Header';
import Slider from "react-slick";
import styles from "../styles/Events.module.css";

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
        <div>
          <img src="/assets/events/acm_1.png" alt="" />
        </div>
        <div>
          <img src="/assets/events/acm_2.png" alt="" />
        </div>
        <div>
          <img src="/assets/events/acm_3.png" alt="" />
        </div>
        <div>
          <img src="/assets/events/acm_4.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}
