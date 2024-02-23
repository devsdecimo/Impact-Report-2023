import React from "react";
import { HeaderContainer } from "./Header.styles.jsx";
import { useNavigate } from "react-router-dom";

function Header({ children, background }) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <img
        src={`${background ? background : ""}`}
        className="header_image"
      />
      <img src="/assets/images/header_logo.svg" className="header_logo"  onClick={()=>{navigate("/")}}/>
      <div className="header_content">
        {children}
      </div>
    </HeaderContainer>
  );
}

export default Header;
