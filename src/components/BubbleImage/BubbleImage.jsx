import React, { useRef, useEffect } from "react";
import { BubbleImageContainer } from "./BubbleImage.styles.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function BubbleImage({
  image,
  image2,
  alt,
  alt2,
  direction = "down",
  className,
  type = 1,
  orientation,
}) {
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
    <BubbleImageContainer
      className={`${className} type-${type}`}
      ref={ref}
      direction={direction}
      orientation={orientation}
    >
      {(type === 1 || type === 3 || type === 6) && (
        <>
          <span className="circle circle-1"></span>
          <span className="circle circle-2"></span>
          <span className="circle circle-3"></span>
          <img src={image} className="circle circle-image" alt={alt}/>
        </>
      )}

      {type === 2 && (
        <>
          <img src={image} className="circle circle-image" alt={alt} />
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </>
      )}

      {type === 4 && (
        <>
          <img className="image" src={image} alt={alt} />
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </>
      )}

      {type === 5 && (
        <>
          
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <img className="image image-2" src={image2} alt={alt2} />
          <div className="circle circle-4"></div>
          <img className="image image-1" src={image} alt={alt} />
        </>
      )}
    </BubbleImageContainer>
  );
}

export default BubbleImage;
