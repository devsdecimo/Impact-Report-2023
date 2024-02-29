import React from "react";
import { AnimatedHeaderContainer } from "./AnimatedHeader.styles.jsx";
import { useNavigate } from "react-router-dom";


function AnimatedHeader({ children, background }) {
  const navigate = useNavigate();

  return (
    <AnimatedHeaderContainer>
      <img
        src={`${background ? background : ""}`}
        className="header_image"
      />
      <img src="/assets/images/header_logo.svg" className="header_logo"  onClick={()=>{navigate("/")}}/>
      <div className="header_bottom" />
      <div className="header_bottom_over" />
      <img src="" alt="" />
      <div className="header_content">
        {children}
      </div>
    </AnimatedHeaderContainer>
  );
}

export default AnimatedHeader;
