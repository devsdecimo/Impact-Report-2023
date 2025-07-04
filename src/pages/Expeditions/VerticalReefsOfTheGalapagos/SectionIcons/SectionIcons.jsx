import React from "react";
import { SectionIconsContainer } from "./SectionIcons.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Auv from "/assets/images/icons/auv.svg"
import Casts from "/assets/images/icons/casts.svg"
import Days from "/assets/images/icons/days.svg"
import Dives from "/assets/images/icons/dives.svg"
import Map from "/assets/images/icons/map.svg"
import Samples from "/assets/images/icons/samples.svg"
import Data from "/assets/images/icons/data.svg"


function SectionIcons() {
  return (
    <SectionIconsContainer>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Days} 
                numbers='31'
                text={"science days"} 
                opacity={1}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Map} 
                numbers='12892'
                text={"sq km mapped"} 
                opacity={1}
            />
        </div>
        <div className="columna">
        <IconWithText  
                className={'CTA'} 
                icon={Data} 
                numbers='31'
                text={"terabytes of data collected"} 
                opacity={1}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Dives} 
                numbers='25'
                text={"ROV dives"} 
                opacity={1}
            />
        </div>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Casts} 
                numbers='105'
                text={"CTD & rosette casts"} 
                opacity={1}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Samples} 
                numbers='337'
                text={"samples"} 
                opacity={1}
            />
        </div>
    </SectionIconsContainer>
    
  );
}

export default SectionIcons;