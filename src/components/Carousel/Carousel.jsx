import React, { useState, useEffect, useRef } from 'react';
import { CarouselContainer, Slide, DotContainer, Dot, ArrowButton } from './Carousel.styles.jsx';

function Carousel({ slides, autoplay = true, loop = true, delay = 5000, className }) {
  const [currentSlides, setCurrentSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setCurrentSlides(slides);
  }, [slides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? (loop ? 0 : prevIndex) : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (loop ? slides.length - 1 : prevIndex) : prevIndex - 1
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

  const getSlidePosition = (index) => {
    let position = 'next';
    if (index === currentIndex) {
      position = 'center';
    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
      position = 'prev';
    } else if (currentIndex === slides.length - 1 && index === 0) {
      position += ' first-next';
    }
    return position;
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setDragDistance(0);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const currentX = e.clientX;
      const diffX = startX - currentX;
      setDragDistance(dragDistance => dragDistance + Math.abs(diffX));
      if (Math.abs(diffX) > 50) {
        diffX > 0 ? nextSlide() : prevSlide();
        setIsDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    if (dragDistance < 5) {
      setIsDragging(false);
      setDragDistance(0);
    }
  };

  const pauseAutoplay = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (autoplay) {
      timeoutRef.current = setTimeout(nextSlide, delay);
    }
  };

  return (
    <CarouselContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={pauseAutoplay}
      className={className}
    >
      <ArrowButton direction="left" onClick={prevSlide}>
        &#10094;
      </ArrowButton>

      {currentSlides.map((slide, index) => (
        <Slide key={slide.img} className={getSlidePosition(index)}>
          <a
            href={slide.href || ''}
            target={slide.target || '_self'}
            onClick={(e) => {
              if (isDragging || !slide.href) {
                e.preventDefault();
              }
            }}
          >
            <img
              src={slide.img}
              alt={slide.alt}
              draggable={false}
            />
          </a>
        </Slide>
      ))}

      <ArrowButton direction="right" onClick={nextSlide}>
        &#10095;
      </ArrowButton>

      <DotContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            actived={(index === currentIndex ? 1 : 0)}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
}

export default Carousel;