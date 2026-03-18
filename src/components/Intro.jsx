import React, { useEffect } from "react";
import bg from "../assets/images/couples.png";
import floral from "../assets/images/floral1.png";

const Intro = () => {

  useEffect(() => {
    const text = document.querySelector(".introText");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add("showText");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(text);
  }, []);

  return (
    <div
      className="introContainer"
      style={{ backgroundImage: `url(${bg})` }}
    >
 

      <div className="bottomOverlay">

        <div className="introText">
          <h1>Anju & Vikas</h1>
          <p>Together With Their Families</p>
        </div>

        <img src={floral} alt="floral" className="floralBottom" />

      </div>
    </div>
  );
};

export default Intro;