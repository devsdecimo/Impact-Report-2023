import React, { useRef, useEffect } from "react";
import { BubbleImageContainer } from "./BubbleImage.styles.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function BubbleImage({
  image,
  alt,
  direction = "down",
  className,
  type = 1,
  orientation = "left",
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
      {type === 1 ||
        (type === 3 && (
          <>
            <span className="circle circle-1"></span>
            <span className="circle circle-2"></span>
            <span className="circle circle-3"></span>
            <img src={image} className="circle circle-image" alt={alt} />
          </>
        ))}

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
    </BubbleImageContainer>
  );
}

export default BubbleImage;
