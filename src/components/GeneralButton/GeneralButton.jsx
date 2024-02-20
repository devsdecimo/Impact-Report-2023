import React from "react";
import { GeneralButtonContainer } from "./GeneralButton.styles";
import { Link } from "react-router-dom";


function GeneralButton({href,icon, iconPosition = 'left', text}) {
  return (
    <GeneralButtonContainer>
      <Link to={href}>
        <button>
            {iconPosition=='left' &&
            <img src={icon} alt=''/>}
            <span>{text}</span>
            {iconPosition=='right' &&
            <img src={icon} alt=''/>}
        </button>   
        </Link> 
    </GeneralButtonContainer>
  );
}

export default GeneralButton;