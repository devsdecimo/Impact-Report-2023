import React, { useRef, useEffect, } from "react";
import { BubbleImageContainer } from "./BubbleImage.styles.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function BubbleImage({ image, direction = "down", className }) {
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
    <BubbleImageContainer className={className} ref={ref} direction={direction}>
      <span className="circle circle-1"></span>
      <span className="circle circle-2"></span>
      <span className="circle circle-3"></span>
      <img src={image} className="circle circle-image" />
    </BubbleImageContainer>
  );
}

export default BubbleImage;
