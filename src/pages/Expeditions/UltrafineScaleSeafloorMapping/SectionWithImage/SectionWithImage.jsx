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
                    <span>FKt231024</span>
                    <span>|</span>
                    <span>#MappingGalápagosVents</span>
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
                    text={"24 October - 22 November 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Dr. John Jamieson, Memorial University of Newfoundland</>} 
                    opacity={1}
                />
                 <IconWithText  
                    className={'CTA'} 
                    icon={Map} 
                    text={<a href="https://api.maptiler.com/maps/6fe4420d-e743-4b15-97e7-3c0da9f2e92b/?key=egFVe2SmC2zBUYnGILbj#4.0/2.83751/-82.34852" target="_blank" rel="noopener noreferrer">Ship Track</a>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;