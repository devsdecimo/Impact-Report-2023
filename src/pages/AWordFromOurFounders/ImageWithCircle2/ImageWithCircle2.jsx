import React from "react";
import { ImageWithCircle2Container } from "./ImageWithCircle2.styles";

function ImageWithCircle2({image,alt, circleImage, orientation = 'left'}) {
  return (
    <ImageWithCircle2Container orientation={orientation}>
        <img src={image} alt={alt} />
        <div className="circle1"></div>
        <img src={circleImage} className="circle2"/>
    </ImageWithCircle2Container>
    
  );
}

export default ImageWithCircle2;