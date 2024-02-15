import styled from "styled-components";

export const CollectedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-right: 10vw;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  justify-self: center;
  margin-top: 8rem;
  aspect-ratio: 0.55;
  @media (min-width: 830px) {
    min-width: 30vw;
    grid-row: 31 / 38;
    grid-column: 2 / 3;
    justify-self: right;
    margin-top: 0;
    aspect-ratio: 1.78;
  }

  img {
    position: absolute;
  }

  .circle {
    position: absolute;
    aspect-ratio: 1 / 1;
    border-radius: 100%;

    &-gray {
      left: 30%;
      top: 5%;
      background-color: #ebedef;
      width: 68%;
      @media (min-width: 830px) {
        width: 39%;
        left: 14%;
        top: 14%;
      }
    }

    &-image {
      left: 10%;
      width: 68%;
      @media (min-width: 830px) {
        width: 39%;
        left: 0;
        top: 0;
      }
    }

    &-lightblue {
      left: 36%;
      top: 18%;
      width: 17%;
      mix-blend-mode: multiply;
      background-color: #84cbf5;
    }

    &-darkblue {
      left: 26%;
      top: 50%;
      width: 17%;
      mix-blend-mode: multiply;
      background-color: #3e5973;
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
    font-size: 4vw;

    &-samples {
      left: 36%;
      top: 18%;
      width: 17%;
      @media (min-width: 830px) {
        font-size: 1.8vw;
      }
    }

    &-terabytes {
      font-size: 4.6vw;
      left: 26%;
      top: 50%;
      width: 17%;
      @media (min-width: 830px) {
        font-size: 2.2vw;
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
    &-collected {
      color: #85ccf6;
      text-transform: uppercase;
      font-size: 10vw;
      top: 44%;
      left: 11%;
      @media (min-width: 830px) {
        font-size: 2.8vw;
        top: -3%;
        right: 6%;
        left: unset;
      }
    }

    &-terabytes {
      color: #3e5973;
      font-size: 3.2vw;
      position: absolute;
      right: 2%;
      bottom: 22%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.3vw;
      }
    }

    &-samples {
      color: #85ccf6;
      font-size: 3.8vw;
      position: absolute;
      right: 20%;
      top: 26%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.6vw;
      }
    }

    &-ampersand {
      color: #5d8cab;
      font-size: 3vw;
      position: absolute;
      right: 14%;
      top: 30%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.6vw;
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
    .numbers,
    .country > * {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-image {
      animation-delay: 0.5s;
    }
    .circle-lightblue {
      animation-delay: 1s;
    }
    .circle-darkblue {
      animation-delay: 1.5s;
    }
    .text {
      animation-delay: 2s;
    }
    .numbers {
      animation-delay: 2.5s;
    }
  }
`;
