import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  align-items: end;
  max-width: 100vw;

  .footer_image {
    width: 100%;
    height: auto;
  }

  .footer_content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
