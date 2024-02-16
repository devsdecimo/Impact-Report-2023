import styled from "styled-components";

export const SharedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-right: 10vw;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  aspect-ratio: 0.35;
  justify-self: center;
  margin-top: 8rem;
  @media (min-width: 830px) {
    min-width: 30vw;
    grid-row: 44 / 50;
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
    &-image {
      top: 6%;
      left: 14%;
      width: 57%;
      @media (min-width: 830px) {
        top: 10%;
        left: -4%;
        width: 45%;
      }
    }

    &-lighterblue {
      left: 52%;
      top: 11%;
      width: 47%;

      mix-blend-mode: multiply;
      background-color: #a7e7f6;
      @media (min-width: 830px) {
        left: 28%;
        top: 30%;
        width: 39%;
      }
    }

    &-lightblue {
      left: 58%;
      top: 26%;
      width: 21%;
      mix-blend-mode: multiply;
      background-color: #85ccf6;
    }

    &-blue {
      left: 31%;
      top: 0%;
      width: 57%;
      mix-blend-mode: multiply;
      background-color: #83caf4;
      @media (min-width: 830px) {
        left: 12%;
        top: -10%;
        width: 45%;
      }
    }

    &-darkblue {
      left: 33%;
      top: 15%;
      width: 14%;
      mix-blend-mode: multiply;
      background-color: #56a1c8;
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

    &-publications {
      font-size: 5vw;
      left: 33%;
      top: 15%;
      width: 14%;
      @media (min-width: 830px) {
        font-size: 2.2vw;
      }
    }

    &-articles {
      font-size: 4.5vw;
      left: 58%;
      top: 26%;
      width: 21%;
      @media (min-width: 830px) {
        font-size: 1.75vw;
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
    color: #3e5973;
    font-weight: 400;
    font-size: 4vw;
    @media (min-width: 830px) {
      font-size: 1.4vw;
    }
    &-shared {
      color: #3e5973;
      font-size: 6.5vw;
      text-transform: uppercase;
      top: -5%;
      right: 26.5%;
      font-weight: 600;
      @media (min-width: 830px) {
        font-size: 2.8vw;
      }
    }

    &-through {
      right: 2%;
      top: 1%;
      @media (min-width: 830px) {
        right: 10%;
      }
    }

    &-science {
      right: 25%;
      top: -13%;
    }

    &-publications {
      right: 4%;
      top: 19%;
      @media (min-width: 830px) {
        right: 13%;
      }
    }

    &-more {
      right: 40%;
      top: 38%;
    }

    &-articles {
      right: 6%;
      top: 38%;
    }

    &-ampersand {
      color: #5d8cab;
      font-size: 4vw;
      right: -2%;
      top: 21%;
      @media (min-width: 830px) {
        font-size: 1.9vw;
        right: 6%;
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
