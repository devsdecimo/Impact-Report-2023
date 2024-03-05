import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  max-width: 100vw;

  .header_logo {
    position: absolute;
    top: 5%;
    left: 5%;
    height: 15%;
    z-index: 2;
    cursor: pointer;

    @media (min-width: 768px) {
      top: 6%;
      left: 6%;
      height: 9%;
    }
  }

  .header_image {
    width: 100%;
  }

  .header_content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    gap: 2rem;

    img {
        max-width: 45%;
    }
  }
`;
