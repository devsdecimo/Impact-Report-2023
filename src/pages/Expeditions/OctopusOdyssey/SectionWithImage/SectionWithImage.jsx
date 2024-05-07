import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Map from "/assets/images/icons/maptrack.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image, image2, alt, alt2}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={5} image={image} image2={image2} alt={alt} alt2={alt2}/>
            <div className="text-container">
                <h2 className="title">
                    <span>FKt230602 & FKt231202</span>
                    <span>|</span>
                    <span>#OctoOdyssey</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Pin} 
                    text={"Costa Rica"} 
                    opacity={1}
                />
                 <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"2 - 21 June 2023 | 2 - 15 December 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Drs. Beth Orcutt, <br/>Bigelow Laboratory for Ocean Sciences<br/>and Jorge Cortés, <br/>University of Costa Rica</>} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Map} 
                    text={<a href="https://api.maptiler.com/maps/44b29ef0-7763-4a93-b820-d91ba19f1629/?key=egFVe2SmC2zBUYnGILbj#5.5/9.30641/-85.89859" target="_blank" rel="noopener noreferrer">Ship Track - Octopus Odyssey</a>} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Map} 
                    text={<a href="https://api.maptiler.com/maps/23ae9b64-e335-44ec-a873-724f08db8a39/?key=egFVe2SmC2zBUYnGILbj#4.1/8.81816/-83.45626" target="_blank" rel="noopener noreferrer">Ship Track - Octopus Odyssey (too)</a>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;