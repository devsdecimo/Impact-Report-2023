import React from "react";
import { SectionIconsContainer } from "./SectionIcons.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Auv from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/auv.svg"
import Casts from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/casts.svg"
import Days from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/days.svg"
import Dives from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/dives.svg"
import Map from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/map.svg"
import Samples from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/samples.svg"
import Travel from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/travel.svg"


function SectionIcons() {
  return (
    <SectionIconsContainer>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Days} 
                numbers='40'
                text={"science days"} 
                opacity={0.8}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Map} 
                numbers='34100'
                text={"sq km mapped"} 
                opacity={0.8}
            />
        </div>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Travel} 
                numbers='6796'
                numbers2='8'
                separator='.'
                text={"km traveled"} 
                opacity={0.8}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Casts} 
                numbers='18'
                text={"CTD casts"} 
                opacity={0.8}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Dives} 
                numbers='14'
                text={"ROV dives"} 
                opacity={0.8}
            />
        </div>
        <div className="columna">
            <IconWithText  
                className={'CTA'} 
                icon={Auv} 
                numbers='21'
                text={"AUV and other vehicle deployments"} 
                opacity={0.8}
            />
            <IconWithText  
                className={'CTA'} 
                icon={Samples} 
                numbers='361'
                text={"ROV samples collected"} 
                opacity={0.8}
            />
        </div>
    </SectionIconsContainer>
    
  );
}

export default SectionIcons;