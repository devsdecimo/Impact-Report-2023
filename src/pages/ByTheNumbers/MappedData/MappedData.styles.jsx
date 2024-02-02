import styled from "styled-components";

export const MappedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 10vw;
  font-weight: 700;
  min-width: 55vw;
  min-height: 15vh;
  justify-self: center;
  background-attachment: fixed;
  margin-top: 8rem;
  aspect-ratio: 1.35;
  @media (min-width: 830px) {
    min-width: 25vw;
    grid-row: 8 / 12;
    justify-self: left;
  }

  img {
    position: absolute;
  }

  .circle-image1 {
    width: 56%;
    aspect-ratio: 1 / 1;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .circle-image2 {
    width: 26%;
    aspect-ratio: 1/1;
    top: 37%;
    left: 46%;
  }

  .circle-lightblue {
    position: absolute;
    width: 43%;
    aspect-ratio: 1/1;
    top: -13%;
    left: 33%;
    mix-blend-mode: overlay;
  }

  .circle-darkblue {
    position: absolute;
    background-size: contain;
    width: 18%;
    aspect-ratio: 1 / 1;
    bottom: 3%;
    left: 39%;
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

    &-discovering {
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
    &-mapped {
      color: #3e5973;
      font-size: 6vw;
      text-transform: uppercase;
      top: -5%;
      @media (min-width: 830px) {
        top: -5%;
        right: -3%;
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

  * {
    opacity: 0;
    transform: scale(0);
  }

  &.animated {
    .circle-lightblue,
    .circle-image1,
    .circle-image2,
    .circle-blue,
    .circle-darkblue,
    .text,
    .numbers {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-lightblue {
      animation-delay: 0.5s;
    }

    .circle-image2 {
      animation-delay: 0.5s;
    }
    .circle-image2 {
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
