import styled from "styled-components";

export const ButtonImageContainer = styled.div`
  position: relative;
  button {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 15vh;
    max-width: 130px;
    max-height: 130px;
    border-radius: 100%;
    border: 0.5rem solid var(--white);
    background-color: var(--white);
    cursor: pointer;
    opacity: 0;
    transform: scale(0);
    animation: fadein 1s linear ${(props) => props.delay || 0}s;
    animation-fill-mode: forwards;
    transition: 1s;

    img {
      transition: 1s;
      height: 15vh;
      max-height: 130px;
    }

    &:hover,
    &:focus {
      img {
        transform: scale(1.3);
      }
    }

    &:active {
      filter: grayscale(1) brightness(1.5);
      transition: 0.01s;
    }

    @media (min-width: 768px) {
      height: 10vw;
      width: 10vw;
      img {
        height: 10vw;
      }
    }
  }

  .open_animation {
    height: 0;
    width: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    transition: 5s;
    background: white;
    z-index: 10;
    &.open {
      height: 1000vw !important;
      width: 1000vw !important;
      position: absolute;
    }
  }
`;
