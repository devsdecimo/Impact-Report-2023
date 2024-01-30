import React from "react";
import { HeaderContainer } from "./Header.styles.jsx";

function Header({ children, background }) {
  return (
    <HeaderContainer>
      <img src={`${background ? background : ""}`} className="header_image" />
      <img src="/assets/images/header_logo.svg" className="header_logo" />
      <div className="header_content">{children}</div>
    </HeaderContainer>
  );
}

export default Header;
