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
  aspect-ratio: 1.35;
  mix-blend-mode: multiply;
  margin-left: -15vw;
  @media (min-width: 830px) {
    min-width: 25vw;
    grid-row: 14 / 20;
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
    &-image1 {
      width: 56%;
      top: 0;
      bottom: 0;
      left: 0;
    }

    &-image2 {
      width: 26%;
      top: 37%;
      left: 46%;
    }

    &-lighterblue {
      width: 43%;
      top: -13%;
      left: 33%;
      mix-blend-mode: overlay;
      background-color: #a7e7f6;
    }

    &-lighterbluebg {
      width: 43%;
      top: -13%;
      left: 33%;
      background-color: #a7e7f6;
    }

    &-darkblue {
      background-color: #365974;
      mix-blend-mode: multiply;
      background-size: contain;
      width: 20%;
      bottom: 0%;
      left: 36%;
    }

    &-lightblue {
      background-color: #84cbf5;
      mix-blend-mode: multiply;
      width: 17%;
      bottom: -14%;
      left: 50%;
    }

    &-blue {
      background-color: #5d8cab;
      mix-blend-mode: multiply;
      width: 17%;
      bottom: -25%;
      left: 37%;
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

    &-including {
      font-size: 7vw;
      width: 20%;
      bottom: 0%;
      left: 36%;
      margin-left: -1%;
      ::after {
        content: "+";
        font-size: 3vw;
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
      }
      @media (min-width: 830px) {
        font-size: 3.2vw;
        ::after {
          font-size: 2.2vw;
        }
      }
    }

    &-seamount {
      font-size: 7vw;
      width: 17%;
      bottom: -14%;
      left: 50%;
      @media (min-width: 830px) {
        font-size: 3.2vw;
      }
    }

    &-cold {
      font-size: 7vw;
      width: 17%;
      bottom: -25%;
      left: 37%;
      @media (min-width: 830px) {
        font-size: 3.2vw;
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
      font-size: 6vw;
      text-transform: uppercase;
      top: -5%;
      @media (min-width: 830px) {
        top: -5%;
        right: -3%;
        font-size: 3.1vw;
      }
    }

    &-km2 {
      font-size: 5.8vw;
      right: -26%;
      top: 9%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 2.8vw;
        right: -26%;
      }
    }

    &-seafloor {
      font-size: 4vw;
      top: 23%;
      right: -25%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.6vw;
      }
    }

    &-including {
      font-size: 4.4vw;
      bottom: 8%;
      left: 4%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
      }
    }
    &-hydrothermal {
      font-size: 4.4vw;
      bottom: 8%;
      right: -48%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
      }
    }

    &-seamounts {
      font-size: 4.4vw;
      color: #60a7d1;
      bottom: -7%;
      right: -1%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
      }
    }

    &-cold {
      font-size: 4.4vw;
      color: #5d8baa;
      bottom: -23%;
      right: -35%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
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
      animation-delay: 0.5s;
      opacity: 0.25;
    }

    .circle-image2 {
      animation-delay: 0.5s;
    }
    .circle-image2 {
      animation-delay: 1s;
    }

    .circle-darkblue {
      animation-delay: 1.25s;
    }

    .circle-lightblue {
      animation-delay: 1.5s;
    }

    .circle-blue {
      animation-delay: 1.75s;
    }

    .text {
      animation-delay: 2s;
    }
    .numbers {
      animation-delay: 2.5s;
    }
  }
`;
