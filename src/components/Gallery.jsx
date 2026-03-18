import React from "react";

import img1 from "../assets/gallery/Img1.png";
import img2 from "../assets/gallery/Img2.png";
import img3 from "../assets/gallery/Img3.png";
import img4 from '../assets/gallery/Img4.png'
import img5 from "../assets/gallery/Img5.png";
import img6 from "../assets/gallery/Img6.png";

const images = [
  { img: img1, text: "A Beautiful Beginning" },
  { img: img2, text: "Endless Memories" },
  { img: img3, text: "Forever Starts Here" },
  { img: img4, text: "Moments of Love" },
  { img: img5, text: "Captured Forever" },
  { img: img6, text: "A New Chapter" }
];

const SideScrollGallery = () => {
  return (
    <section className="sideGallery">

      <h2 className="galleryTitle">Our Moments</h2>

      <div className="scrollWrapper">

        <div className="scrollTrack">
          {/* duplicate for infinite loop */}
          {[...images, ...images].map((item, index) => (
            <div
              key={index}
              className="scrollItem"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="overlay">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default SideScrollGallery;