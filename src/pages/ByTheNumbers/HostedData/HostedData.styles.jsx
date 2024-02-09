import styled from "styled-components";

export const HostedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-right: 10vw;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  aspect-ratio: 1.78;
  justify-self: center;
  margin-top: 8rem;
  @media (min-width: 830px) {
    min-width: 30vw;
    grid-row: 19 / 24;
    grid-column: 2 / 3;
    justify-self: right;
    margin-top: 0;
  }

  img {
    position: absolute;
  }

  .image {
    top: 0;
    bottom: 0;
    right: 0;
    max-height: 100%;
    pointer-events: none;
  }

  .circle-image {
    position: absolute;
    right: -12%;
    top: 15%;
    height: 78%;
  }

  .circle-blue {
    position: absolute;
    right: 13%;
    top: 10%;
    height: 80%;
    mix-blend-mode: multiply;
  }

  .circle-lightblue {
    position: absolute;
    right: 76%;
    top: 50%;
    width: 10%;
    mix-blend-mode: darken;
  }

  .circle-mediumblue {
    position: absolute;
    right: 81%;
    top: 62%;
    width: 10%;
    mix-blend-mode: multiply;
  }

  .circle-darkblue {
    position: absolute;
    right: 80%;
    top: 34%;
    width: 12%;
    mix-blend-mode: multiply;
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
    align-items: center;
    color: var(--white);
    margin: 0;
    font-size: 4vw;

    @media (min-width: 830px) {
      font-size: 2vw;
    }

    &-scientists {
      right: 83%;
      top: 38%;
    }

    &-students {
      right: 77.5%;
      top: 53%;
      @media (min-width: 830px) {
        font-size: 1.8vw;
      }
    }

    &-artists {
      right: 83%;
      top: 65%;
      @media (min-width: 830px) {
        font-size: 1.8vw;
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
    &-hosted {
      color: #5a83a1;
      font-size: 6vw;
      text-transform: uppercase;
      top: 15%;
      left: 7%;
      @media (min-width: 830px) {
        font-size: 2.8vw;
      }
    }

    &-scientists {
      color: #5a83a1;
      font-size: 3vw;
      position: absolute;
      right: 63%;
      top: 40%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.3vw;
      }
    }

    &-students {
      color: #9fc9f4;
      font-size: 3vw;
      position: absolute;
      right: 61%;
      top: 52%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.3vw;
      }
    }

    &-artists {
      color: #5d8baa;
      font-size: 3vw;
      position: absolute;
      right: 70%;
      top: 66%;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.3vw;
      }
    }

    &-ampersand {
      color: #5a83a1;
      font-size: 3.2vw;
      right: 66%;
      top: 67%;
      font-weight: 400;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 1.4vw;
      }
    }

    &-berths {
      color: #99bed5;
      font-size: 3vw;
      right: 60%;
      top: 75%;
      font-weight: 400;
      width: 20%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 1.3vw;
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
    .numbers,
    .country > * {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-blue {
      animation-delay: 0.5s;
    }
    .circle-darkblue {
      animation-delay: 1s;
    }
    .circle-lightblue {
      animation-delay: 1.25s;
    }
    .circle-mediumblue {
      animation-delay: 1.5s;
    }
    .image {
      animation-delay: 2s;
    }
    .text {
      animation-delay: 2.5s;
    }
    .numbers {
      animation-delay: 3s;
    }
  }
`;
