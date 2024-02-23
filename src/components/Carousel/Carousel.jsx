import React, { useState, useEffect, useRef } from 'react';
import { CarouselContainer, Slide, DotContainer, Dot, ArrowButton } from './Carousel.styles.jsx';

function Carousel({ slides, autoplay = true, loop = true, delay = 5000 }) {
  const [currentSlides, setCurrentSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(slides.map(slide => {
        return new Promise(resolve => {
          adjustImageToAspectRatio(slide.img, (newImgSrc) => {
            resolve({ ...slide, img: newImgSrc });
          });
        });
      }));
      setCurrentSlides(loadedImages);
    };

    loadImages();
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
      // timeoutRef.current = setTimeout(nextSlide, delay);
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
      // timeoutRef.current = setTimeout(nextSlide, delay);
    }
  };

  const adjustImageToAspectRatio = (imgUrl, callback) => {
    const img = new Image();
    img.onload = () => {
      const targetWidth = 533;
      const targetHeight = 300;
      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');
  
      const imgAspectRatio = img.width / img.height;
      const canvasAspectRatio = targetWidth / targetHeight;
  
      let drawWidth, drawHeight, offsetX, offsetY;
      if (imgAspectRatio > canvasAspectRatio) {
        drawHeight = targetHeight;
        drawWidth = img.width * (targetHeight / img.height);
        offsetX = (targetWidth - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = targetWidth;
        drawHeight = img.height * (targetWidth / img.width);
        offsetX = 0;
        offsetY = (targetHeight - drawHeight) / 2;
      }
  
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  
      const quality = 0.85;
      callback(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = (e) => {
      console.error("Error loading image", e);
    };
    img.src = imgUrl;
  };

  return (
    <CarouselContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={pauseAutoplay}
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
              alt={`Slide ${index}`}
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
