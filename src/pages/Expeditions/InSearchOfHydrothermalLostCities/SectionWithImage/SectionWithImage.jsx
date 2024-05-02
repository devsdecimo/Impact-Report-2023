import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import Flag from "/assets/images/icons/flag.svg"
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
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;