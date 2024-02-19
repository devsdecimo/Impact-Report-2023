import React from "react";
import { GeneralButtonContainer } from "./GeneralButton.styles";



function GeneralButton({href,icon, iconPosition = 'left', text}) {
  return (
    <GeneralButtonContainer>
        <a href={href}>
            {iconPosition=='left' &&
            <img src={icon} alt=''/>}
            <span>{text}</span>
            {iconPosition=='right' &&
            <img src={icon} alt=''/>}
        </a>    
    </GeneralButtonContainer>
  );
}

export default GeneralButton;