import "./Events.css";
import EventsSection from '../component/events-section';

const Events = () => {
  return (
    <div className="events6">
      <div className="upcoming-event-container">
        <p className="upcoming-event">Upcoming Event !</p>
      </div>
      <div className="events-child2" />
      <div className="past-events">{`Past Events `}</div>
      <EventsSection/>
      <img className="events-child6" alt="" src="/ellipse-8.svg" />
      <img className="events-child7" alt="" src="/ellipse-9.svg" />
      <div className="register">Register</div>
      <b className="flutter">FLUTTER</b>
      <div className="date-25022033-container">
        <span>Date</span>
        <span className="span">{` : `}</span>
        <span>25/02/2033</span>
      </div>
      <div className="time-200-container">
        <span>Time : 2:00 pm</span>
        <span className="span">{` `}</span>
      </div>
      <div className="venue-lab-503">Venue: Lab 503</div>
      <img className="download-1-1" alt="" src="/download-1-1@2x.png" />
      <div className="compose-camp">Compose Camp</div>
      <div className="compose-camp1">ML Study Jams</div>
      <img className="gcp-zx2gjlm-1-icon" alt="" src="/gcp-zx2gjlm-1@2x.png" />
      <img className="download-2-1" alt="" src="/download-2-1@2x.png" />
      <div className="group">
        <img
          className="property-1default-icon"
          alt=""
          src="/property-1default.svg"
        />
      </div>
    </div>
  );
};

export default Events;
