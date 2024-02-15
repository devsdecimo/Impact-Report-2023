import styled from "styled-components";

export const MappedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  min-width: 55vw;
  min-height: 15vh;
  justify-self: center;
  background-attachment: fixed;
  margin-top: 8rem;
  aspect-ratio: 0.4;
  mix-blend-mode: multiply;
  margin-left: -15vw;
  @media (min-width: 830px) {
    min-width: 25vw;
    grid-row: 14 / 20;
    grid-column: 1 / 2;
    justify-self: left;
    margin-left: 10vw;
    aspect-ratio: 1.35;
  }

  img {
    position: absolute;
  }

  .circle {
    border-radius: 100%;
    aspect-ratio: 1 / 1;
    position: absolute;
    &-image1 {
      width: 80%;
      top: 0;
      bottom: 0;
      left: 5%;

      @media (min-width: 830px) {
        width: 56%;
        left: 0;
      }
    }

    &-image2 {
      width: 46%;
      top: 14%;
      left: 60%;
      @media (min-width: 830px) {
        width: 26%;
        top: 37%;
        left: 46%;
      }
    }

    &-lighterblue {
      width: 64%;
      top: -5%;
      left: 50%;
      mix-blend-mode: overlay;
      background-color: #a7e7f6;
      @media (min-width: 830px) {
        width: 43%;
        top: -13%;
        left: 40%;
      }
    }

    &-lighterbluebg {
      width: 64%;
      top: -5%;
      left: 50%;
      background-color: #a7e7f6;
      @media (min-width: 830px) {
        width: 43%;
        top: -13%;
        left: 40%;
      }
    }

    &-darkblue {
      background-color: #365974;
      mix-blend-mode: multiply;
      background-size: contain;
      width: 36%;
      bottom: 19%;
      left: 9%;
      @media (min-width: 830px) {
        width: 20%;
        bottom: 0%;
        left: 36%;
      }
    }

    &-lightblue {
      background-color: #84cbf5;
      mix-blend-mode: multiply;
      width: 26%;
      bottom: 8%;
      left: 31%;
      @media (min-width: 830px) {
        width: 17%;
        bottom: -14%;
        left: 50%;
      }
    }

    &-blue {
      background-color: #5d8cab;
      mix-blend-mode: multiply;
      width: 26%;
      bottom: 2%;
      left: 14%;
      @media (min-width: 830px) {
        width: 17%;
        bottom: -25%;
        left: 37%;
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
    span {
      margin-top: 10%;
    }

    &-including {
      font-size: 10vw;
      width: 36%;
      bottom: 19%;
      left: 9%;
      margin-left: -1%;
      ::after {
        content: "+";
        font-size: 8vw;
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
      }
      @media (min-width: 830px) {
        width: 20%;
        bottom: 0%;
        left: 36%;
        font-size: 3.2vw;
        ::after {
          font-size: 2.2vw;
        }
      }
    }

    &-seamount {
      font-size: 7vw;
      width: 26%;
      bottom: 8%;
      left: 31%;
      @media (min-width: 830px) {
        font-size: 3.2vw;
        width: 17%;
        bottom: -14%;
        left: 50%;
      }
    }

    &-cold {
      font-size: 7vw;
      width: 26%;
      bottom: 2%;
      left: 14%;
      @media (min-width: 830px) {
        font-size: 3.2vw;
        width: 17%;
        bottom: -25%;
        left: 37%;
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

    &-mapped {
      font-size: 12.7vw;
      text-transform: uppercase;
      top: 36%;
      left: 17%;
      font-weight: 800;

      @media (min-width: 830px) {
        top: -5%;
        left: unset;
        right: -3%;
        font-size: 3.1vw;
      }
    }

    &-km2 {
      font-weight: 800;
      font-size: 10.2vw;
      top: 46%;
      left: 3%;
      width: 125%;
      @media (min-width: 830px) {
        width: auto;
        font-size: 2.8vw;
        left: unset;
        right: -26%;
        top: 9%;
      }
    }

    &-seafloor {
      font-size: 7vw;
      top: 54%;
      left: 40%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.6vw;
        top: 23%;
        right: -25%;
        left: unset;
      }
    }

    &-including {
      font-size: 7vw;
      bottom: 33%;
      left: 4%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
        bottom: 8%;
        left: 4%;
      }
    }

    &-hydrothermal {
      font-size: 7vw;
      bottom: 20%;
      left: 49%;
      font-weight: 400;
      width: 100%;
      @media (min-width: 830px) {
        font-size: 2vw;
        bottom: 8%;
        right: -48%;
        left: unset;
        width: auto;
      }
    }

    &-seamounts {
      font-size: 7vw;
      color: #60a7d1;
      bottom: 11%;
      left: 63%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
        bottom: -7%;
        right: -1%;
        left: unset;
      }
    }

    &-cold {
      font-size: 7vw;
      color: #5d8baa;
      font-weight: 400;
      bottom: -3%;
      left: 42%;
      width: 100%;
      @media (min-width: 830px) {
        font-size: 2vw;
        bottom: -23%;
        right: -35%;
        left: unset;
        width: auto;
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
    .circle-lightblue,
    .circle-lightbluebg {
      animation-delay: 0.3125s;
      opacity: 0.25;
    }

    .circle-image2 {
      animation-delay: 0.625s;
    }
    .circle-image2 {
      animation-delay: 0.9375s;
    }

    .circle-darkblue {
      animation-delay: 1.25s;
    }

    .circle-lightblue {
      animation-delay: 1.5625s;
    }

    .circle-blue {
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
