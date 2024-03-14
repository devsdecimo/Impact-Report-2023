import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  align-items: end;
  max-width: 100vw;

  .footer_image {
    width: 100%;
    height: auto;
    filter: brightness(0.8);
  }

  .footer_content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      padding-top: 2rem;
      color: var(--white);
      font-size: 2vw;
      font-weight: bold;
      text-shadow: 0 0 20px rgba(0,0,0,1);
    }
  }
`;
