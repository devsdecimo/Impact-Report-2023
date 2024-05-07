import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Map from "/assets/images/icons/maptrack.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image, image2, alt, alt2}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={5} image={image} image2={image2} alt={alt} alt2={alt}/>
            <div className="text-container">
                <h2 className="title">
                    <span>FKt230812</span>
                    <span>|</span>
                    <span>#GalápagosVents</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Pin} 
                    text={"Galápagos Islands National Park, Ecuador"}
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"13 August - 10 September 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Drs. Roxanne Beinart, University of Rhode Island and <br/>Jill McDermott, Lehigh University</>} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Map} 
                    text={<a href="https://api.maptiler.com/maps/1e625064-cc3b-4d1d-9e18-d6736ca01283/?key=egFVe2SmC2zBUYnGILbj#3.6/3.31779/-86.57269" target="_blank" rel="noopener noreferrer">Ship Track</a>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;