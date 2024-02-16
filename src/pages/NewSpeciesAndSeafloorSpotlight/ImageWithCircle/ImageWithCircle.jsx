import React from "react";
import { ImageWithCircleContainer } from "./ImageWithCircle.styles";

function ImageWithCircle({image,alt}) {
  return (
    <ImageWithCircleContainer>
        <img src={image} alt={alt} />
        <div className="circle1"></div>
        <div className="circle2"></div>
    </ImageWithCircleContainer>
    
  );
}

export default ImageWithCircle;