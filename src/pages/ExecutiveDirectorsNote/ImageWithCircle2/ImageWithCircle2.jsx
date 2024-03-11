import React, { useEffect, useRef } from "react";
import { ImageWithCircle2Container } from "./ImageWithCircle2.styles";

function ImageWithCircle2({image,alt, orientation = 'left'}) {
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
    <ImageWithCircle2Container orientation={orientation} ref={ref}>
        <img className="circle circle-3"/>
        <div className="circle circle-1"/>
        <img className="circle circle-2"/>
        <img src={image} alt={alt} className="circle circle-image"/>
    </ImageWithCircle2Container>
    
  );
}

export default ImageWithCircle2;