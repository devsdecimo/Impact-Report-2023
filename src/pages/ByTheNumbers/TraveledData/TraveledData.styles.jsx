import styled from "styled-components";

export const TraveledDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-right: 10vw;
  font-weight: 700;
  min-width: 80vw;
  min-height: 15vh;
  grid-row: 4 / 8;
  justify-self: right;

  @media (min-width: 830px) {
    min-width: 600px;
    min-height: 244px;
  }

  img {
    position: absolute;
  }

  .circle-lightblue {
    width: 40%;
    aspect-ratio: 1 / 1;
    top: 0;
    bottom: 0;
    right: 20%;
  }

  .circle-blue,
  .circle-darkblue {
    position: absolute;
    background-size: contain;
    width: 12%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    mix-blend-mode: multiply;
  }

  .circle-darkblue {
    right: 10%;
    top: 45%;
    transform: translateY(-50%);
  }

  .circle-blue {
    right: 16%;
    top: 25%;
    transform: translateY(-50%);
    @media (min-width: 830px) {
      top: 25%;
    }
  }

  .numbers {
    position: absolute;
    align-items: center;
    color: var(--white);
    margin: 0;

    &-expeditions {
      font-size: 14vw;
      left: 19.5%;
      top: -25%;
      transform: translateX(-50%);
      @media (min-width: 830px) {
        top: -29%;
        font-size: 6rem;
      }
    }

    &-days {
      font-size: 7vw;
      right: 44%;
      top: 50%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 3rem;
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
    &-traveled {
      color: #5A83A1;
      font-size: 8vw;
      text-transform: uppercase;
      top: -22%;
      left: 42%;
      @media (min-width: 830px) {
        top: -22%;
        font-size: 3.7rem;
      }
    }

    &-days {
      color: #3e5973;
      font-size: 5.5vw;
      right: -4%;
      top: 47%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 3.75rem;
      }
    }
  }

  * {
    /* opacity: 0;
    transform: scale(0); */
  }

  &.animated {
    .circle-lightblue,
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
    .circle-blue,
    .circle-darkblue {
      animation-delay: 1s;
    }
    .text {
      animation-delay: 1.5s;
    }
    .numbers {
      animation-delay: 2s;
    }
  }


`;
