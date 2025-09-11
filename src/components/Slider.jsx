import React, { useEffect, useRef, useState } from "react";
import "../assets/css/slider.css"; // Import CSS file

const Slider = ({ slides, autoPlay = true, autoPlayDelay = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const autoPlayRef = useRef(null);

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayDelay);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, currentIndex, autoPlayDelay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay((prev) => !prev);
  };

  // Pause/play videos when slide changes
  useEffect(() => {
    const allVideos = document.querySelectorAll(".slide video");
    allVideos.forEach((video) => video.pause());

    const currentSlide = document.querySelector(
      `.slide:nth-child(${currentIndex + 1}) video`
    );
    if (currentSlide) {
      currentSlide.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
            {slide.type === "image" ? (
              <img src={slide.src} alt={`slide-${i}`} />
            ) : (
              <video
                src={slide.src}
                muted
                loop
                playsInline
                controls={slide.controls || false}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="nav-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="nav-btn next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Play / Pause Autoplay */}
      <button className="play-pause-btn" onClick={toggleAutoPlay}>
        {isAutoPlay ? "⏸️" : "▶️"}
      </button>

      {/* Dots */}
      <div className="dots-container">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
