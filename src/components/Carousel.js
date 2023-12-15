import React, { useState } from "react";
import images from "../assets";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const currentTransform = -activeIndex * 100;

  // _______ Pagination Indicator _______
  const renderPaginationIndicatiors = () => {
    return images.map((_, index) => (
      <button
        key={index}
        className={`pagination-indicator ${
          index === activeIndex ? "active" : ""
        }`}
        onClick={() => setActiveIndex(index)}
      ></button>
    ));
  };
  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        {images.map((source, i) => (
          <img
            src={source}
            alt={`profile- ${i}`}
            key={i}
            className="carousel-item"
          />
        ))}
      </div>

      {/* _____pagination indicator function_____ */}
      <div className="pagination-indicators">
        {renderPaginationIndicatiors()}
      </div>
      
      {/* _____navigation buttons______ */}
      <button className="carousel-controls prev" onClick={handlePrev}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <button className="carousel-controls next" onClick={handleNext}>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </div>
  );
};

export default Carousel;
