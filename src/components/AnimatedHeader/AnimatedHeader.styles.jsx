import styled from "styled-components";

export const AnimatedHeaderContainer = styled.div`
  position: relative;
  max-width: 100vw;

  .header_logo {
    position: absolute;
    top: 5%;
    left: 5%;
    height: 20%;
    z-index: 2;
    cursor: pointer;

    @media (min-width: 768px) {
      top: 6%;
      left: 6%;
      height: 12%;
    }
  }

  .header_image {
    width: 100%;
    max-height: 91vh;
    object-fit: cover;
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
      max-width: 60%;
    }
  }

  .header_bottom {
    background: url("/assets/images/HeaderBottom.png") repeat-x;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    animation: wave 60s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);

    @media (min-width: 768px) {
      height: 160px;
    }
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -2795px;
    }
  }
`;
