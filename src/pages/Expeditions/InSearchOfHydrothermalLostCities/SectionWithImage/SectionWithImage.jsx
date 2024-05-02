import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import Map from "/assets/images/icons/maptrack.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image,alt}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={4} image={image} alt={alt}/>
            <div className="text-container">
                <h2 className="title">
                    <span>FKt230303</span>
                    <span>|</span>
                    <span>#LostCityVents</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Pin} 
                    text={"Mid-Atlantic Ridge"} 
                    opacity={1}
                />
                 <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"3 March - 11 April 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Dr. David Butterfield, <br/>University of Washington & <br/>NOAA Pacific Marine Environmental Laboratory</>}
                    text2={""}
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Map} 
                    text={<a href="https://api.maptiler.com/maps/e368ce32-5d5e-4ea2-baab-95008a16d110/?key=egFVe2SmC2zBUYnGILbj#3.7/22.39536/-54.00255" target="_blank" rel="noopener noreferrer">Cruise's Track</a>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;