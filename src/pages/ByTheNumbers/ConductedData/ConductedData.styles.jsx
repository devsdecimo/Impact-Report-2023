import styled from "styled-components";

export const ConductedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  width: 70vw;
  min-height: 15vh;
  aspect-ratio: 0.55;
  justify-self: center;
  margin-top: 8rem;
  @media (min-width: 768px) {
    width: 30vw;
    aspect-ratio: 2.1;
    grid-row: 9 / 11;
    grid-column: 1 / 2;
    justify-self: left;
    margin-top: 0;
    margin-left: 10vw;
    align-self: center;
  }

  img {
    position: absolute;
  }

  .image {
    width: 140%;
    top: 0;
    bottom: 0;
    left: 2%;
    @media (min-width: 768px) {
      width: 100%;
      top: 0;
      bottom: 0;
      left: 0;
    }
  }

  .circle {
    position: absolute;
    aspect-ratio: 1/1;
    border-radius: 100%;

    &-bg {
      width: 56%;
      left: 12%;
      top: -2%;
      background-color: #83caf4;
      @media (min-width: 768px) {
        width: 42%;
        left: 10%;
        top: -8%;
      }
    }

    &-lighterblue {
      mix-blend-mode: multiply;
      left: 53%;
      width: 40%;
      top: 1%;
      background-color: #a7e7f6;
      @media (min-width: 768px) {
        left: 38%;
        width: 30%;
        top: 0%;
      }
    }

    &-darkblue {
      left: 2%;
      top: 48%;
      width: 25%;
      mix-blend-mode: multiply;
      background-color: #3e5973;
      @media (min-width: 768px) {
        width: 18%;
        top: 30%;
        right: 25.5%;
        left: unset;
      }
    }

    &-blue {
      left: 2%;
      width: 25%;
      top: 65%;
      mix-blend-mode: multiply;
      background-color: #56a1c8;
      @media (min-width: 768px) {
        width: 18%;
        right: 23%;
        top: 53%;
        left: unset;
      }
    }

    &-lightblue {
      left: 2%;
      top: 82%;
      width: 25%;
      mix-blend-mode: multiply;
      background-color: #84cbf5;
      @media (min-width: 768px) {
        width: 18%;
        right: 29%;
        top: 83%;
        left: unset;
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
    aspect-ratio: 1 / 1;

    /* span {
      margin-top: 10%;
    } */

    &-ctd {
      font-size: 6.8vw;
      left: 2%;
      top: 48%;
      width: 25%;
      @media (min-width: 768px) {
        font-size: 2.2vw;
        width: 18%;
        top: 30%;
        right: 25.5%;
        left: unset;
      }
    }

    &-underwater {
      font-size: 6.8vw;
      left: 2%;
      width: 25%;
      top: 65%;
      @media (min-width: 768px) {
        font-size: 2.2vw;
        width: 18%;
        top: 53%;
        right: 23%;
        left: unset;
      }
    }

    &-hours {
      font-size: 6.8vw;
      left: 2%;
      top: 82%;
      width: 25%;
      @media (min-width: 768px) {
        font-size: 1.9vw;
        width: 18%;
        right: 29%;
        top: 83%;
        left: unset;
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
    font-weight: 400;
    &-conducted {
      color: #56a1c8;
      text-transform: uppercase;
      font-size: 10vw;
      top: 38%;
      left: 4%;
      font-weight: 700;
      @media (min-width: 768px) {
        font-size: 3vw;
        top: 5%;
        left: 35%;
      }
    }

    &-ctd {
      color: #3e5973;
      font-size: 5.5vw;
      left: 30%;
      top: 53%;
      @media (min-width: 768px) {
        font-size: 2.1vw;
        right: -4%;
        left: unset;
        top: 35%;
      }
    }

    &-ampersand {
      color: #3e5973;
      font-size: 5.8vw;
      left: 67%;
      top: 57%;
      @media (min-width: 768px) {
        font-size: 2.1vw;
        top: 40%;
        right: -11%;
      }
    }

    &-underwater {
      color: #56a1c8;
      font-size: 5.5vw;
      top: 64%;
      width: 90%;
      left: 30%;
      @media (min-width: 768px) {
        font-size: 2.1vw;
        right: -37%;
        left: unset;
        top: 57%;
        width: 58%;
      }
    }

    &-totaling {
      color: #2097d3;
      display: none;
      @media (min-width: 768px) {
        display: block;
        font-size: 1.5vw;
        right: 49%;
        top: 97%;
      }
    }

    &-hours {
      font-size: 5.5vw;
      color: #3e85af;
      top: 83%;
      left: 30%;
      width: 40%;
      @media (min-width: 768px) {
        display: none;
      }
    }

    &-hours-desktop {
      color: #2097d3;
      display: none;
      @media (min-width: 768px) {
        display: block;
        font-size: 1.5vw;
        top: 97%;
        right: -31%;
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
    .image {
      animation-delay: 1.5s;
    }
    .circle-lighterblue {
      animation-delay: 0.25s;
    }
    .circle-darkblue {
      animation-delay: 0.3s;
    }
    .circle-blue {
      animation-delay: 0.375s;
    }
    .circle-lightblue {
      animation-delay: 0.5s;
    }
    .text {
      animation-delay: 0.75s;
    }
    .numbers {
      animation-delay: 1.5s;
    }
  }
`;
