import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Flag from "/assets/images/icons/flag.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image, image2 ,alt}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={4} image={image} alt={alt}/>
            <div className="text-container">
                <h2 className="title">
                    <span>FKt230802</span>
                    <span>|</span>
                    <span>#MicroplasticDynamics</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Pin} 
                    text={"Gulf of Panama"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Flag} 
                    text={"Panama"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"2 - 7 August 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Dr. Laura Simon Sánchez,<br/> Aalborg University</>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;