import styled from "styled-components";

export const HostedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  justify-self: center;
  margin-top: 8rem;
  aspect-ratio: 0.65;
  @media (min-width: 830px) {
    min-width: 30vw;
    grid-row: 19 / 24;
    grid-column: 2 / 3;
    justify-self: right;
    margin-top: 0;
    aspect-ratio: 1.78;
    margin-right: 10vw;
  }

  img {
    position: absolute;
  }

  .image {
    top: 0;
    bottom: 0;
    right: 20%;
    width: 120%;
    pointer-events: none;
    @media (min-width: 830px) {
      right: 0;
      width: 100%;
    }
  }

  .circle {
    position: absolute;
    aspect-ratio: 1 / 1;
    border-radius: 100%;

    &-image {
      right: 10%;
      top: 8%;
      width: 50%;
      @media (min-width: 830px) {
        right: -11%;
        top: 15%;
        width: 45%;
      }
    }

    &-blue {
      background-color: #83caf4;
      right: 40%;
      top: 5%;
      width: 50%;
      mix-blend-mode: multiply;
      @media (min-width: 830px) {
        right: 13%;
        top: 10%;
        width: 45%;
      }
    }

    &-lightblue {
      background-color: #83caf5;
      left: 21%;
      top: 67%;
      width: 21%;
      mix-blend-mode: darken;
      @media (min-width: 830px) {
        right: 76%;
        left: unset;
        top: 50%;
        width: 10%;
      }
    }

    &-mediumblue {
      background-color: #5d8cab;
      top: 75%;
      width: 21%;
      left: 10%;
      mix-blend-mode: multiply;
      @media (min-width: 830px) {
        right: 81%;
        left: unset;
        top: 62%;
        width: 10%;
      }
    }

    &-darkblue {
      background-color: #365974;
      top: 57%;
      width: 23%;
      left: 10%;
      mix-blend-mode: multiply;
      @media (min-width: 830px) {
        right: 80%;
        left: unset;
        top: 34%;
        width: 12%;
      }
    }
  }

  .ship {
    top: -15%;
    right: 0;
    width: 109%;
    @media (min-width: 830px) {
      right: -8%;
      top: -17%;
      width: 119%;
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

    span {
      margin-top: 10%;
    }

    @media (min-width: 830px) {
      font-size: 2vw;
    }

    &-scientists {
      top: 57%;
      width: 23%;
      left: 10%;
      font-size: 8vw;
      @media (min-width: 830px) {
        font-size: 1.8vw;
        right: 80%;
        left: unset;
        top: 34%;
        width: 12%;
      }
    }

    &-students {
      left: 21%;
      top: 67%;
      width: 21%;
      font-size: 7vw;
      @media (min-width: 830px) {
        font-size: 1.8vw;
        right: 76%;
        left: unset;
        top: 50%;
        width: 10%;
      }
    }

    &-artists {
      top: 75%;
      width: 21%;
      left: 10%;
      font-size: 7vw;
      @media (min-width: 830px) {
        font-size: 1.8vw;
        right: 81%;
        left: unset;
        top: 62%;
        width: 10%;
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
    font-size: 7vw;

    @media (min-width: 830px) {
      font-size: 1.3vw;
    }

    &-hosted {
      color: #3e5973;
      font-size: 6vw;
      font-size: 12.7vw;
      text-transform: uppercase;
      top: 45%;
      left: 11%;
      @media (min-width: 830px) {
        font-size: 2.8vw;
        top: 15%;
        left: 7%;
      }
    }

    &-scientists {
      color: #5a83a1;
      position: absolute;
      right: 30%;
      top: 60%;
      font-weight: 400;
      @media (min-width: 830px) {
        right: 63%;
        top: 40%;
      }
    }

    &-students {
      color: #9fc9f4;
      position: absolute;
      right: 23%;
      top: 69.5%;
      font-weight: 400;
      @media (min-width: 830px) {
        right: 61%;
        top: 52%;
      }
    }

    &-artists {
      color: #5d8baa;
      position: absolute;
      right: 44%;
      top: 78.5%;
      font-weight: 400;
      @media (min-width: 830px) {
        right: 70%;
        top: 66%;
      }
    }

    &-ampersand {
      color: #5a83a1;
      right: 33%;
      top: 82.5%;
      font-weight: 400;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 1.5vw;
        right: 64%;
        top: 69%;
      }
    }

    &-berths {
      color: #99bed5;
      right: 20%;
      top: 89%;
      font-weight: 400;
      width: 47%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        right: 60%;
        top: 78%;
        width: 20%;
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
    .circle-blue {
      animation-delay: 0.3125s;
    }
    .circle-darkblue {
      animation-delay: 0.625s;
    }
    .circle-lightblue {
      animation-delay: 1.25s;
    }
    .circle-mediumblue {
      animation-delay: 1.5625s;
    }
    .image {
      animation-delay: 1.875s;
    }
    .text {
      animation-delay: 2.1875s;
    }
    .numbers {
      animation-delay: 2.5s;
    }
  }
`;
