import React, { useRef, useEffect } from "react";
import { BubbleImageContainer } from "./BubbleImage.styles.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function ButtonImage({ image, direction = "down" }) {
  return (
    <BubbleImageContainer direction={direction}>
      <img src={image} className="circle circle-image" />
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </BubbleImageContainer>
  );
}

export default ButtonImage;
