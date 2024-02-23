import styled from "styled-components";

export const ExpeditionsDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  justify-self: center;
  aspect-ratio: 0.9;

  @media (min-width: 830px) {
    min-width: 35vw;
    aspect-ratio: 2.1;
    grid-row: 1 / 5;
    grid-column: 1 / 2;
    justify-self: left;
    margin-left: 10vw;
  }

  img {
    position: absolute;
  }

  .circle {
    border-radius: 100%;
    aspect-ratio: 1 / 1;
    position: absolute;

    &-image {
      width: 64%;
      top: 5%;
      bottom: 0;
      right: 10%;
      @media (min-width: 830px) {
        width: 44%;
        top: 0;
        right: unset;
        left: 5%;
      }
    }

    &-gray {
      width: 64%;
      top: 0;
      left: 2%;
      mix-blend-mode: multiply;
      background-color: #eeeeee;
      @media (min-width: 830px) {
        width: 44%;
        top: -9%;
        left: -5%;
      }
    }

    &-darkblue {
      width: 21%;
      left: 10%;
      top: 85%;
      background-color: #3e5973;
      mix-blend-mode: multiply;
      @media (min-width: 830px) {
        left: unset;
        right: 40%;
        top: 9%;
      }
    }

    &-blue {
      width: 21%;
      left: 2%;
      top: 70%;
      background-color: #56a1c8;
      mix-blend-mode: multiply;
      @media (min-width: 830px) {
        left: 13%;
        top: -30%;
      }
    }
  }

  .numbers {
    position: absolute;
    color: var(--white);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    aspect-ratio: 1 / 1;
    width: 21%;
    span {
      margin-top: 10%;
    }
    
    &-expeditions {
      font-size: 10vw;
      left: 2%;
      top: 70%;
      @media (min-width: 830px) {
        font-size: 6vw;
        left: 13%;
        top: -30%;
      }
    }

    &-days {
      font-size: 7vw;
      left: 10%;
      top: 85%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 2.8vw;
        left: unset;
        right: 40%;
        top: 9%;
      }
    }

    span {
      display: contents;
    }
  }

  .text {
    position: absolute;
    right: 0;
    margin: 0;
    &-expeditions {
      color: #56a1c8;
      font-size: 7vw;
      text-transform: uppercase;
      top: 75%;
      left: 28%;
      @media (min-width: 830px) {
        top: -24%;
        left: 36%;
        font-size: 3.1vw;
      }
    }

    &-days {
      color: #3e5973;
      font-size: 6.7vw;
      left: 35%;
      top: 88.5%;
      transform: translateY(-50%);
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2.2vw;
        left: unset;
        right: 1%;
        top: 23.5%;
      }
    }
  }

  & > * {
    opacity: 0;
    transform: scale(0);
  }

  &.animated {
    img,
    .circle,
    .text,
    .numbers {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-image {
      animation-delay: 0.375s;
    }
    .circle-blue,
    .circle-darkblue {
      animation-delay: 0.5s;
    }
    .text {
      animation-delay: 0.75;
    }
    .numbers {
      animation-delay: 1.5s;
    }
  }
`;
