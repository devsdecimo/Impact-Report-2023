import React from "react";
import { ImageWithCircleContainer } from "./ImageWithCircle.styles";

function ImageWithCircle({image,alt, circleImage, orientation = 'left'}) {
  return (
    <ImageWithCircleContainer orientation={orientation}>
        <img src={image} alt={alt} />
        <div className="circle1"></div>
        <div className="circle3"></div>
        <img src={circleImage} className="circle2"/>
    </ImageWithCircleContainer>
    
  );
}

export default ImageWithCircle;