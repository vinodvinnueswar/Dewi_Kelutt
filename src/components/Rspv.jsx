import React, { useState, useEffect, useRef } from "react";

const RSVP = () => {

  const [form, setForm] = useState({
    name: "",
    guests: 1,
    attending: "yes",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("showRSVP");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendWhatsApp = () => {

    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }

    setLoading(true);

    const text = `RSVP Details:%0A
Name: ${form.name}%0A
Guests: ${form.guests}%0A
Attending: ${form.attending}%0A
Message: ${form.message}`;

    setTimeout(() => {
      window.open(`https://wa.me/917680812372?text=${text}`, "_blank");
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section ref={sectionRef} className="rsvpSection">

      <h2 className="rsvpTitle">RSVP</h2>

      <div className="rsvpContainer">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />

        <select name="guests" onChange={handleChange}>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
        </select>

        <select name="attending" onChange={handleChange}>
          <option value="yes">Will Attend</option>
          <option value="no">Will Not Attend</option>
        </select>

        <textarea
          name="message"
          placeholder="Leave a message (optional)"
          onChange={handleChange}
        ></textarea>

        <button
          className={`rsvpBtn ${success ? "success" : ""}`}
          onClick={sendWhatsApp}
          disabled={loading}
        >
          {loading ? "Sending..." : success ? "Sent ✓" : "Send RSVP"}
        </button>

      </div>

    </section>
  );
};

export default RSVP;