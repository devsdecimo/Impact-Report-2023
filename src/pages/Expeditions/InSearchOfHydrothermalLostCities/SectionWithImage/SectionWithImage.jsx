import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/pin.svg"
import Flag from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/flag.svg"
import Discovered from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/discovered.svg"



function SectionWithImage({image,alt}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <div className="image-container">
                <img className="pos-absolute" src={image} alt={alt} />
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
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
                    text={"San Juan, Puerto Rico"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Flag} 
                    text={"Mid-Atlantic Ridge"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={"Dr. David Butterfield"} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;