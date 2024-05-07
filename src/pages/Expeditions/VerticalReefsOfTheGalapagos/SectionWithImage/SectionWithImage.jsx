import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Map from "/assets/images/icons/maptrack.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image,alt}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={4} image={image}/>
            <div className="text-container">
                <h2 className="title">
                    <span>FKt230918</span>
                    <span>|</span>
                    <span>#VerticalCliffs</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Pin} 
                    text={<>Galápagos Islands National Park, Ecuador <br/> and Isla del Coco, Costa Rica</>} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"18 September - 19 October 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Dr. Katleen Robert, Memorial University Newfoundland</>} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Map} 
                    text={<a href="https://api.maptiler.com/maps/7c7047c5-0d5a-4209-93ba-38e5fcd60c13/?key=egFVe2SmC2zBUYnGILbj#4.0/3/-90.46" target="_blank" rel="noopener noreferrer">Ship Track</a>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;