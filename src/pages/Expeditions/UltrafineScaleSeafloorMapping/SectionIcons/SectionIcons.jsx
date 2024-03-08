import React from "react";
import { SectionIconsContainer } from "./SectionIcons.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Auv from "/assets/images/icons/auv.svg"
import Casts from "/assets/images/icons/casts.svg"
import Days from "/assets/images/icons/days.svg"
import Dives from "/assets/images/icons/dives.svg"
import Map from "/assets/images/icons/map.svg"
import Samples from "/assets/images/icons/samples.svg"
import Travel from "/assets/images/icons/travel.svg"


function SectionIcons() {
  return (
    <SectionIconsContainer>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Days} 
                numbers='32'
                text={"science days"} 
                opacity={0.8}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Map} 
                numbers='20010'
                text={"sq km mapped"} 
                opacity={0.8}
            />
        </div>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Travel} 
                numbers='4566'
                text={"km traveled"} 
                opacity={0.8}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Casts} 
                numbers='4'
                text={"CTD casts"} 
                opacity={0.8}
            />
        </div>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Dives} 
                numbers='16'
                text={"ROV dives over 324 hours"} 
                opacity={0.8}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Samples} 
                numbers='299'
                text={"samples"} 
                opacity={0.8}
            />
        </div>
    </SectionIconsContainer>
    
  );
}

export default SectionIcons;