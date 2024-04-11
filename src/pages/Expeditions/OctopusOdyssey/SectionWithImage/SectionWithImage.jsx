import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Flag from "/assets/images/icons/flag.svg"
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
                    icon={Flag} 
                    text={"Dorado Outcrop"} 
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
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;