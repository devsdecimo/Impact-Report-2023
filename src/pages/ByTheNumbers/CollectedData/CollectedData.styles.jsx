import styled from "styled-components";

export const CollectedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
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
    margin-right: 10vw;
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
      left: 7%;
      width: 68%;
      @media (min-width: 830px) {
        width: 39%;
        left: 0;
        top: 0;
      }
    }

    &-lightblue {
      left: 8%;
      top: 54%;
      width: 30%;
      mix-blend-mode: multiply;
      background-color: #84cbf5;
      @media (min-width: 830px) {
        left: 36%;
        top: 18%;
        width: 17%;
      }
    }

    &-darkblue {
      left: 0%;
      top: 67%;
      width: 30%;
      mix-blend-mode: multiply;
      background-color: #3e5973;
      @media (min-width: 830px) {
        left: 26%;
        top: 50%;
        width: 17%;
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
    font-size: 4vw;

    &-samples {
      font-size: 7vw;
      left: 8%;
      top: 54%;
      width: 30%;
      @media (min-width: 830px) {
        font-size: 1.8vw;
        left: 36%;
        top: 18%;
        width: 17%;
      }
    }

    &-terabytes {
      font-size: 7vw;
      left: 0%;
      top: 67%;
      width: 30%;
      @media (min-width: 830px) {
        left: 26%;
        top: 50%;
        width: 17%;
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
      font-size: 11.7vw;
      top: 44%;
      left: 0;
      @media (min-width: 830px) {
        font-size: 2.8vw;
        top: -3%;
        right: 6%;
        left: unset;
      }
    }

    &-terabytes {
      color: #3e5973;
      font-size: 7vw;
      position: absolute;
      left: 34%;
      top: 72%;
      width: 75%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.3vw;
        right: 2%;
        bottom: 22%;
        top: unset;
        left: unset;
        width: unset;
      }
    }

    &-samples {
      color: #85ccf6;
      position: absolute;
      font-size: 7vw;
      left: 44%;
      top: 59%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.6vw;
        left: unset;
        right: 20%;
        top: 26%;
      }
    }

    &-ampersand {
      color: #5d8cab;
      font-size: 7vw;
      position: absolute;
      left: 44%;
      top: 65.5%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.6vw;
        right: 14%;
        top: 30%;
        left: unset;
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
