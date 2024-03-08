import React, { useEffect, useRef } from "react";
import { ImageWithCircleContainer } from "./ImageWithCircle.styles";

function ImageWithCircle({image,alt, circleImage, orientation = 'left'}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <ImageWithCircleContainer orientation={orientation} ref={ref}>
        <img className="circle circle-2"/>
        <div className="circle circle-1"></div>
        <img src={circleImage} alt={alt} className="circleImage"/>
        <img src={image} alt={alt} className="image"/>
    </ImageWithCircleContainer>
    
  );
}

export default ImageWithCircle;