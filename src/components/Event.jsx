import React, { useEffect, useRef } from "react";

const eventsData = [
  {
    name: "Haldi Ceremony",
    date: "March 20, 2026",
    time: "10:00 AM",
    place: "Bride's Home"
  },
  {
    name: "Mehendi",
    date: "March 20, 2026",
    time: "5:00 PM",
    place: "Banquet Hall"
  },
  {
    name: "Sangeet Night",
    date: "March 20, 2026",
    time: "8:00 PM",
    place: "Resort Lawn"
  },
  {
    name: "Wedding",
    date: "March 21, 2026",
    time: "9:00 AM",
    place: "Temple"
  }
];

const Events = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("showEvents");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
  }, []);

  return (
    <section ref={sectionRef} className="eventsSection">

      <h2 className="eventTitle">Wedding Events</h2>

      <div className="timeline">

        {eventsData.map((event, index) => (
            <div
            key={index}
            className={`eventWrapper ${index % 2 === 0 ? "left" : "right"}`}
            >
            <div className="eventCard">
                <h3 className="eventName">{event.name}</h3>
                <p className="eventDate">{event.date}</p>
                <p className="eventTime">{event.time}</p>
                <p className="eventPlace">{event.place}</p>
            </div>
            </div>
        ))}

        </div>

    </section>
  );
};

export default Events;