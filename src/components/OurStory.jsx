import React, { useEffect, useRef } from "react";

const storyData = [
  {
    title: "How We Met",
    text: "Our story began with a simple hello that quickly turned into endless conversations and laughter.",
    year: "2019"
  },
  {
    title: "First Adventure",
    text: "From traveling together to discovering new places, every moment brought us closer.",
    year: "2020"
  },
  {
    title: "The Proposal",
    text: "Under the sunset by the ocean, a question was asked that changed our lives forever.",
    year: "2024"
  },
  {
    title: "The Wedding",
    text: "Now we invite you to celebrate the beginning of our forever together.",
    year: "2026"
  }
];

const Story = () => {

  const itemsRef = useRef([]);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

  }, []);

  return (
    <section className="storySection">

      <h2 className="storyTitle">Our Story</h2>

      <div className="timeline">

        {storyData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timelineItem ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="timelineYear">
              {item.year}
            </div>

            <div className="timelineCard">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Story;