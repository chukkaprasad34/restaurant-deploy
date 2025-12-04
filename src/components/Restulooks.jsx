import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const imageSets = [
  ["/restu_imgs/out1.jpg", "/restu_imgs/out2.jpg", "/restu_imgs/out3.webp"],
  ["/restu_imgs/indore.avif", "/restu_imgs/indore1.jpg", "/restu_imgs/indore3.avif"], 
  ["/restu_imgs/bar1.avif", "/restu_imgs/bar2.avif", "/restu_imgs/bar3.avif"]  
];

const titles = ["Outdoor", "Indoor", "Bar"];

const Restulooks = () => {
  return (
    <div className="restulook">
      <div className="rest_heading">
        <h1>Experience the Beachside Ambiance at Prasad Phuket</h1>
      </div>

      <div className="cards-container">
        {imageSets.map((images, index) => (
          <ImageCard
            key={index}
            images={images}
            title={titles[index]}
          />
        ))}
      </div>
    </div>
  );
};

const ImageCard = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="card">
      <div className="slider">
        <img src={images[current]} className="slide active" alt="slider" />

        <div className="arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </div>

        <div className="arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </div>
      </div>

      <h3>{title}</h3>
    </div>
  );
};

export default Restulooks;
