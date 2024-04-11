import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Flag from "/assets/images/icons/flag.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image, image2 ,alt}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={4} image={image} alt={alt}/>
            <div className="text-conta5iner">
                <h2 className="title">
                    <span>FKt230628</span>
                    <span>|</span>
                    <span>#VentUnderworld</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Flag} 
                    text={"International Waters"} 
                    opacity={1}
                />
                 <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"29 June - 28 July 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={"Dr. Monika Bright, University of Vienna"} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;