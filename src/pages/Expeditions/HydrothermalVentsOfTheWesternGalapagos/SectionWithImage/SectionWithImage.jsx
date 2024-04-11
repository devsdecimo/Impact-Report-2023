import React from "react";
import { SectionWithImageContainer } from "./SectionWithImage.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Pin from "/assets/images/icons/pin.svg"
import Flag from "/assets/images/icons/flag.svg"
import Discovered from "/assets/images/icons/discovered.svg"
import Calendar from "/assets/images/icons/calendar.svg"
import BubbleImage from "../../../../components/BubbleImage/BubbleImage";



function SectionWithImage({image, image2, alt, alt2}) {
  return (
    <SectionWithImageContainer>
        <div className="d-flex">
            <BubbleImage type={5} image={image} image2={image2} alt={alt} alt2={alt}/>
            <div className="text-container">
                <h2 className="title">
                    <span>FKt230812</span>
                    <span>|</span>
                    <span>#GalapagosVents</span>
                </h2>
                <div className="icons-container">
                <IconWithText  
                    className={'CTA'} 
                    icon={Pin} 
                    text={"Ecuador"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Flag} 
                    text={"Western Galápagos Spreading Center"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Calendar} 
                    text={"13 August - 10 September 2023"} 
                    opacity={1}
                />
                <IconWithText  
                    className={'CTA'} 
                    icon={Discovered} 
                    text={<>Drs. Roxanne Beinart, University of Rhode Island <br/> and Jill McDermott, Lehigh University</>} 
                    opacity={1}
                />
                </div>
            </div>
        </div>
        
    </SectionWithImageContainer>
    
  );
}

export default SectionWithImage;