import styled from "styled-components";

export const ExpeditionsDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 10vw;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  justify-self: center;

  @media (min-width: 830px) {
    min-width: 35vw;
    aspect-ratio: 2.1;
    grid-row: 1 / 5;
    grid-column: 1 / 2;
    justify-self: left;
  }

  img {
    position: absolute;
  }

  .circle {
    border-radius: 100%;

    &-image {
      width: 44%;
      aspect-ratio: 1 / 1;
      top: -11%;
      bottom: 0;
      left: 5%;
    }

    &-gray {
      position: absolute;
      width: 44%;
      aspect-ratio: 1 / 1;
      top: -21%;
      left: -5%;
      mix-blend-mode: multiply;
      background-color: #eeeeee;
    }

    &-blue,
    &-darkblue {
      position: absolute;
      width: 21%;
      aspect-ratio: 1 / 1;
      display: flex;
      justify-content: center;
      mix-blend-mode: multiply;
    }

    &-darkblue {
      right: 40%;
      top: 9%;
      background-color: #3e5973;
    }

    &-blue {
      display: block;
      left: 13%;
      top: -25%;
      background-color: #56a1c8;
      @media (min-width: 830px) {
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

    &-expeditions {
      font-size: 14vw;
      left: 13%;
      top: -25%;
      @media (min-width: 830px) {
        font-size: 6vw;
        top: -30%;
      }
    }

    &-days {
      font-size: 7vw;
      right: 40%;
      top: 9%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 2.8vw;
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
      font-size: 6vw;
      text-transform: uppercase;
      top: -20%;
      left: 36%;
      @media (min-width: 830px) {
        top: -24%;
        font-size: 3.1vw;
      }
    }

    &-days {
      color: #3e5973;
      font-size: 4.5vw;
      right: 1%;
      top: 22%;
      transform: translateY(-50%);
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2.2vw;
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
      animation-delay: 0.5s;
    }
    .circle-blue,
    .circle-darkblue {
      animation-delay: 1s;
    }
    .text {
      animation-delay: 1.5s;
    }
    .numbers {
      animation-delay: 2s;
    }
  }
`;
