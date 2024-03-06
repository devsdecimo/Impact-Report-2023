import React, { useState, useEffect, useRef } from "react";
import {
  CarouselNavContainer,
  Slide,
  ArrowButton,
  SlidesContainer,
} from "./CarouselNav.styles.jsx";
import { Link } from "react-router-dom";

function CarouselNav({
  slides = [],
  autoplay = false,
  loop = true,
  delay = 5000,
}) {
  const extendedSlides = [
    ...slides.slice(-slides.length),
    ...slides,
    ...slides.slice(0, slides.length),
  ];
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [enabledTransition, setTransitionEnabled] = useState(true);
  const [enabledPrevNext, setEnabledPrevNext] = useState(true);

  const nextSlide = () => {
    if (!enabledPrevNext) return;
    setEnabledPrevNext(false);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= extendedSlides.length - slides.length) {
        setTimeout(() => {
          setTransitionEnabled(false);
          setCurrentIndex(2);
        }, 500);
      }
      setTimeout(() => {
        setTransitionEnabled(true);
        setEnabledPrevNext(true);
      }, 550);
      return newIndex;
    });
  };

  const prevSlide = () => {
    if (!enabledPrevNext) return;
    setEnabledPrevNext(false);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 2) {
        setTimeout(() => {
          setTransitionEnabled(false);
          setCurrentIndex(extendedSlides.length - (slides.length+1));
        }, 200);
      }
      setTimeout(() => {
        setTransitionEnabled(true);
        setEnabledPrevNext(true);
      }, 250);
      return newIndex;
    });
  };

  const changeSlide = (direction) => {
    if (!enabledPrevNext) return;
    setEnabledPrevNext(false);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex >= extendedSlides.length - slides.length || newIndex < slides.length) {
        setTimeout(() => {
          setTransitionEnabled(false);
          setCurrentIndex(direction > 0 ? slides.length : extendedSlides.length - (slides.length+1));
        }, 200);
      }
      setTimeout(() => {
        setTransitionEnabled(true);
        setEnabledPrevNext(true);
      }, 250);
      return newIndex;
    });
  };

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const slideWidth = 145;
        const newVisibleSlides = Math.floor(containerWidth / slideWidth);
        setVisibleSlides(newVisibleSlides);
      }
    };

    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(this.nextSlide, delay);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoplay, delay, loop, slides.length]);

  useEffect(() => {
    if (slides.length > 1) {
      if (visibleSlides < slides.length) {
        const index = slides.findIndex(
          (expedition) => expedition.href === location.pathname
        );
        setCurrentIndex(index + slides.length);
      } else {
        setCurrentIndex(slides.length / 2);
      }
    }
  }, [slides, visibleSlides]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setDragDistance(0);
  };

  const handleMouseMove = (e) => {
    if (isDragging && visibleSlides < slides.length) {
      const currentX = e.clientX;
      const diffX = startX - currentX;
      setDragDistance((dragDistance) => dragDistance + Math.abs(diffX));
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

  const isActive = (path) => location.pathname === path;

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (autoplay) {
      timeoutRef.current = setTimeout(nextSlide, delay);
    }
  };

  return (
    <CarouselNavContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={pauseAutoplay}
    >
      <SlidesContainer
        currentIndex={currentIndex}
        totalSlides={slides.length}
        visibleSlides={visibleSlides}
        allVisible={visibleSlides >= slides.length}
        enabledTransition={enabledTransition}
      >
        {(visibleSlides < slides.length ? extendedSlides : slides).map(
          (slide, index) => {
            let className = "";
            if (
              index < currentIndex - visibleSlides / 2 ||
              index > currentIndex + visibleSlides / 2
            ) {
              className = "hidden";
            }
            return (
              <Slide
                key={index}
                className={
                  isActive(slide.href) ? `${className} active` : className
                }
                enabledTransition={enabledTransition}
              >
                <Link
                  to={slide.href || ""}
                  target={slide.target || "_self"}
                  onClick={(e) => {
                    if (isDragging || !slide.href) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="slide-image">
                    <img src={slide.img} alt={slide.text} draggable={false} />
                  </div>
                  <div className="slide-text">{slide.text}</div>
                </Link>
              </Slide>
            );
          }
        )}
      </SlidesContainer>

      {visibleSlides < slides.length && (
        <>
          <ArrowButton
            direction="left"
            onClick={() => {
              changeSlide(-1);
            }}
          >
            &#10094;
          </ArrowButton>
          <ArrowButton
            direction="right"
            onClick={() => {
              changeSlide(1);
            }}
          >
            &#10095;
          </ArrowButton>
        </>
      )}
    </CarouselNavContainer>
  );
}

export default CarouselNav;
