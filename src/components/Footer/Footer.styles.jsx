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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      margin: 0;
      color: var(--white);
      font-size: 3vw;
      font-weight: bold;
      text-shadow: 0 0 20px rgba(0, 0, 0, 1);
      @media (min-width: 768px) {
        font-size: 1.7vw;
        padding: 0.5rem;
      }
    }
  }
`;
