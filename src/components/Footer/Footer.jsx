import React from "react";
import {FooterContainer} from './Footer.styles';

function Footer({children, background, alt}) {
    return (
        <FooterContainer>
          <img
            src={`${background ? background : ""}`}
            className="footer_image"
            alt={alt}
          />
          <div className="footer_content">
            <h1>{children}</h1>
            <p>The Return of the Luck Dragon | 2023 Impact Report</p>
            <p>Schmidt Ocean Institute</p>
          </div>
        </FooterContainer>
      );
}

export default Footer;
