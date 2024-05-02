import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import Map from "/assets/images/icons/maptrack.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image,alt}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={4} image={image} alt={alt}/>
            <div className="text-container">
                <h2 className="title">
                    <span>FKt230417</span>
                    <span>|</span>
                    <span>#DiagnosingDeepCoral</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Pin} 
                    text={"Puerto Rico, USA"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"17 April - 6 May 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Dr. Colleen Hansel, <br/> Woods Hole Oceanographic Institution</>} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Map} 
                    text={<a href="https://api.maptiler.com/maps/a7a9b38d-ff06-436d-b34a-22922c48ed6c/?key=egFVe2SmC2zBUYnGILbj#6.7/18.20646/-66.35670" target="_blank" rel="noopener noreferrer">Cruise's Track</a>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;