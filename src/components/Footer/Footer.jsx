import React from "react";
import {FooterContainer} from './Footer.styles';

function Footer({children, background}) {
    return (
        <FooterContainer>
          <img
            src={`${background ? background : ""}`}
            className="footer_image"
          />
          <div className="footer_content">
            <h1>{children}</h1>
            <p>Schmidt Ocean Institute</p>
          </div>
        </FooterContainer>
      );
}

export default Footer;
