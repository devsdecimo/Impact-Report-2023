import React from "react";
import { ImageWithCircle2Container } from "./ImageWithCircle2.styles";

function ImageWithCircle2({image,alt, circleImage, alt2, orientation = 'left'}) {
  return (
    <ImageWithCircle2Container orientation={orientation}>
        <img src={image} alt={alt} className="circle3" />
        <div className="circle1"></div>
        <img src={circleImage} alt={alt2} className="circle2"/>
    </ImageWithCircle2Container>
    
  );
}

export default ImageWithCircle2;