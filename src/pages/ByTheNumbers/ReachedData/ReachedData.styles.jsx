import styled from "styled-components";

export const ReachedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 2vw;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  justify-self: center;
  margin-left: -11rem;
  margin-top: 10rem;
  aspect-ratio: 1.5;
  @media (min-width: 830px) {
    min-width: 28vw;
    grid-row: 40 / 45;
    grid-column: 1 / 2;
    justify-self: left;
    margin-left: 0;
    margin-top: 0;
  }

  img {
    position: absolute;
  }

  .image {
    top: 0;
    left: 0;
    width: 90%;
  }

  .circle-gray {
    top: 5%;
    left: 12%;
    width: 41%;
    mix-blend-mode: multiply;
  }

  .circle-lighterblue {
    top: 0;
    left: 45%;
    width: 47%;
    mix-blend-mode: multiply;
  }

  .circle-lightblue {
    bottom: -2%;
    right: -20%;
    width: 28%;
    @media (min-width: 830px) {
      right: -33%;
      width: 36%;
    }
  }

  .circle-darkblue {
    mix-blend-mode: multiply;
    top: 6%;
    left: 80%;
    width: 22%;
    @media (min-width: 830px) {
      top: 6%;
      left: 86%;
      width: 22%;
    }
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
    color: var(--white);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    aspect-ratio: 1 / 1;

    &-people {
      font-size: 5vw;
      top: 6%;
      left: 80%;
      width: 22%;
      @media (min-width: 830px) {
        font-size: 2vw;
        left: 86%;
      }
    }

    &-social {
      font-size: 3.6vw;
      bottom: -2%;
      right: -20%;
      width: 28%;
      @media (min-width: 830px) {
        font-size: 1.8vw;
        right: -33%;
        width: 36%;
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
    &-reached {
      color: #5d8cab;
      font-size: 6vw;
      text-transform: uppercase;
      top: -10%;
      left: 54%;
      @media (min-width: 830px) {
        font-size: 3.1vw;
      }
    }

    &-people {
      color: #3e5973;
      font-size: 3vw;
      font-weight: 400;
      right: -37%;
      top: 11%;
      width: 33%;
      @media (min-width: 830px) {
        font-size: 1.3vw;
        right: -85%;
        top: 14%;
        width: auto;
      }
    }

    &-and-more {
      color: #84cbf5;
      font-size: 2.9vw;
      right: 10%;
      top: 68%;
      text-align: center;
      line-height: 1.5;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.2vw;
        right: 6%;
        top: 60%;
      }
    }

    &-social {
      color: #84cbf5;
      font-size: 2.9vw;
      right: -41%;
      top: 64%;
      line-height: 1.5;
      font-weight: 400;
      @media (min-width: 830px) {
        font-size: 1.2vw;
        right: -58%;
        top: 57%;
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
    .numbers {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-lighterblue {
      animation-delay: 0.5s;
    }
    .image {
      animation-delay: 1s;
    }
    .circle-darkblue,
    .circle-lightblue {
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
