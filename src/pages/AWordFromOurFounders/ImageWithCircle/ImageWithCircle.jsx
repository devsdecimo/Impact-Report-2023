import React from "react";
import { ImageWithCircleContainer } from "./ImageWithCircle.styles";

function ImageWithCircle({image, alt, circleImage, alt2, orientation = 'left'}) {
  return (
    <ImageWithCircleContainer orientation={orientation}>
        <div className="circle3"></div>
        <img src={circleImage} className="circle2" alt={alt2}/>
        <div className="circle1"></div>
        <img src={image} alt={alt}/>
    </ImageWithCircleContainer>
    
  );
}

export default ImageWithCircle;