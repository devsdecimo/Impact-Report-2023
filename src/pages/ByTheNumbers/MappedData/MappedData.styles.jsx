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
      right: 50%;
      bottom: 4%;
      transform: translateY(-50%);
      ::after {
        content: "+";
        font-size: 3vw;
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
      }
      @media (min-width: 830px) {
        font-size: 3.2vw;
        right: 50%;
        ::after {
          font-size: 2.2vw;
        }
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

    &-discovering {
      font-size: 4.4vw;
      bottom: 8%;
      left: -2%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
      }
    }
    &-underwater {
      font-size: 4.4vw;
      bottom: 8%;
      right: -22%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 2vw;
      }
    }
  }

  * {
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
