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

  .circle-image {
    width: 44%;
    aspect-ratio: 1 / 1;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .circle-gray {
    position: absolute;
    width: 44%;
    aspect-ratio: 1 / 1;
    top: -10%;
    left: -10%;
    opacity: 0.5;
  }

  .circle-blue,
  .circle-darkblue {
    position: absolute;
    background-size: contain;
    width: 21%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    mix-blend-mode: multiply;
  }

  .circle-darkblue {
    right: 40%;
    top: 9%;
    transform: translateY(-50%);
  }

  .circle-blue {
    left: 13%;
    top: -25%;
    @media (min-width: 830px) {
      top: -30%;
    }
  }

  .numbers {
    position: absolute;
    align-items: center;
    color: var(--white);
    margin: 0;

    &-expeditions {
      font-size: 14vw;
      left: 19%;
      top: -25%;
      transform: translateX(-50%);
      @media (min-width: 830px) {
        top: -27%;
        left: 19.5%;
        font-size: 6vw;
      }
    }

    &-days {
      font-size: 7vw;
      right: 44%;
      top: 23%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 2.8vw;
        right: 43%;
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
