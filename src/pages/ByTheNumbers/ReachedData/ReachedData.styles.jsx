import styled from "styled-components";

export const ReachedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  width: 70vw;
  min-height: 15vh;
  justify-self: center;
  margin-top: 11rem;
  aspect-ratio: 0.35;
  @media (min-width: 768px) {
    width: 28vw;
    grid-row: 12 / 15;
    grid-column: 1 / 2;
    justify-self: left;
    margin-top: 0;
    aspect-ratio: 1.5;
    align-self: center;
  }

  img {
    position: absolute;
  }

  .image {
    top: 0;
    left: -15%;
    width: 110%;
    @media (min-width: 768px) {
      width: 90%;
      left: 0;
    }
  }

  .circle {
    position: absolute;
    aspect-ratio: 1 / 1;
    border-radius: 100%;

    &-gray {
      top: 2%;
      left: 1%;
      width: 50%;
      mix-blend-mode: multiply;
      background-color: #ebedef;
      @media (min-width: 768px) {
        top: 5%;
        left: 12%;
        width: 41%;
      }
    }

    &-lighterblue {
      top: 0;
      left: 40%;
      width: 55%;
      mix-blend-mode: multiply;
      background-color: #a7e7f6;
      @media (min-width: 768px) {
        left: 45%;
        width: 47%;
      }
    }

    &-lightblue {
      background-color: #84cbf5;
      bottom: 17%;
      right: 28%;
      width: 48%;
      @media (min-width: 768px) {
        bottom: -5%;
        right: -22%;
        width: 36%;
      }
    }

    &-darkblue {
      mix-blend-mode: multiply;
      background-color: #3e5973;
      top: 35%;
      left: 31%;
      width: 34%;
      @media (min-width: 768px) {
        top: 10%;
        left: 82%;
        width: 22%;
      }
    }

    &-blue {
      left: 13%;
      top: -25%;
      @media (min-width: 768px) {
        top: -30%;
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

    &-people {
      font-size: 8vw;
      top: 35%;
      left: 31%;
      width: 34%;
      @media (min-width: 768px) {
        font-size: 2vw;
        top: 10%;
        left: 82%;
        width: 22%;
      }
    }

    &-social {
      font-size: 6.3vw;
      bottom: 17%;
      right: 28%;
      width: 48%;
      .counter {
        position: relative;
        padding-right: 15%;
        &::after {
          content: "+";
          position: absolute;
          top: 20%;
          transform: translateY(-50%);
        }
      }
      @media (min-width: 768px) {
        font-size: 1.8vw;
        bottom: -5%;
        right: -22%;
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
      font-size: 11.7vw;
      top: 28%;
      left: 10%;
      @media (min-width: 768px) {
        font-size: 3.1vw;
        top: -10%;
        left: 54%;
      }
    }

    &-people {
      color: #3e5973;
      font-size: 6vw;
      font-weight: 400;
      left: 0%;
      top: 48%;
      text-align: center;
      @media (min-width: 768px) {
        font-size: 1.3vw;
        right: -100%;
        top: 17%;
        left: unset;
        text-align: left;
      }
    }

    &-and-more {
      color: #2097d3;
      font-size: 6vw;
      top: 60%;
      left: 0%;
      text-align: center;
      line-height: 1.5;
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: 1.2vw;
        right: -17%;
        top: 42%;
        left: unset;
      }
    }

    &-social {
      color: #2097d3;
      font-size: 6vw;
      top: 84%;
      left: 0%;
      text-align: center;
      line-height: 1.5;
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: 1.2vw;
        right: -45%;
        top: 60%;
        left: unset;
        text-align: left;
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
    .circle-lighterblue {
      animation-delay: 0.3s;
    }
    .image {
      animation-delay: 1.5s;
    }
    .circle-darkblue,
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
