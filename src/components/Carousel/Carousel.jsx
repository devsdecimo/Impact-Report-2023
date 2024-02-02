import React, { useState, useEffect, useRef } from 'react';
import { CarouselContainer, Slide, DotContainer, Dot } from './Carousel.styles.jsx';

function Carousel({ slides, autoplay = true, loop = true, delay = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // This will determine how the slides are shown.
  const visibleSlides = 3; // Number of slides to show at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? (loop ? 0 : prevIndex) : prevIndex + 1
    );
  };

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(nextSlide, delay);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoplay, delay, loop, slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Determine the position of each slide
  const getSlidePosition = (index) => {
    let position = 'next';
    if (index === currentIndex) {
      position = 'center';
    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      position = 'prev';
    }
    return position;
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={slide.img}
          className={getSlidePosition(index)}
        >
          <img src={slide.img} alt={`Slide ${index}`} />
        </Slide>
      ))}
      <DotContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
}

export default Carousel;
