import React, { useEffect, useRef } from "react";

const Location = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("showLocation");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
  }, []);

  return (
    <section ref={sectionRef} className="locationSection">

      <h2 className="locationTitle">Wedding Venue</h2>

      <div className="locationContainer">

        {/* LEFT SIDE */}
        <div className="locationDetails">

          <h3 className="venueName">The Grand Palace</h3>

          <p className="venueAddress">
            123 Ocean Drive, Bali, Indonesia
          </p>

          <p className="venueDate">
            Saturday, February 10, 2026
          </p>

          <p className="venueTime">
            Ceremony Begins at 4:00 PM
          </p>

          <div className="buttonGroup">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mapButton"
            >
              Get Directions
            </a>

            <button className="saveButton">
              Save Date
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="mapContainer">

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Bali&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Location;