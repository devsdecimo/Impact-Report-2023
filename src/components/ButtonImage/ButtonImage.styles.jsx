import styled from "styled-components";

export const ButtonImageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  position: relative;
  text-align: center;

  button {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vw;
    width: 30vw;
    border-radius: 100%;
    border: 0.4rem solid var(--white);
    background-color: var(--white);
    cursor: pointer;
    opacity: 0;
    transform: scale(0);
    animation: fadein 1s linear;
    animation-delay: ${(props) => props.delay || 0}s;
    animation-fill-mode: forwards;
    transition: 1s;
    margin: 0.75rem;

    img {
      transition: 1s;
      height: 30vw;
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

    @media (min-width: 830px) {
      height: 13vh;
      width: 13vh;
      margin: 0;
      img {
        height: 13vh;
      }
    }

    @media only screen and (min-width: 830px) and (max-height: 1400px) and (orientation: portrait) {
      height: 11vw;
      width: 11vw;
      img {
        height: 11vw;
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

  .expedition_tag_mobile {
    animation: fadein 1s linear 0s;
    animation-fill-mode: forwards;
    color: white;
    font-size: 1.2rem;
    margin: 1rem;
    margin-top: 0;
    opacity: 0;
    padding: 0 15%;
    text-align: center;
    transform: scale(0);
    transition: 1s;
    width: 11rem;
  }

  @media (min-width: 830px) {
    .expedition_tag_mobile {
      display: none;
    }
  }
`;
