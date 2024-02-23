import React from "react";
import { GeneralButtonContainer } from "./GeneralButton.styles";
import { Link } from "react-router-dom";


function GeneralButton({href,icon, iconPosition = 'left', text, className}) {
  return (
    <GeneralButtonContainer className={className}>
      <Link to={href}>
            {iconPosition=='left' &&
            <img src={icon} alt=''/>}
            <span>{text}</span>
            {iconPosition=='right' &&
            <img src={icon} alt=''/>}
        </Link> 
    </GeneralButtonContainer>
  );
}

export default GeneralButton;