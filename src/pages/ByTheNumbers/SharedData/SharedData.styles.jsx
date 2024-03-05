import styled from "styled-components";

export const SharedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  width: 70vw;
  min-height: 15vh;
  aspect-ratio: 0.4;
  justify-self: center;
  margin-top: 4rem;
  @media (min-width: 768px) {
    width: 30vw;
    grid-row: 14 / 16;
    grid-column: 2 / 3;
    justify-self: right;
    margin-top: 0;
    aspect-ratio: 1.78;
    margin-right: 10vw;
    align-self: center;
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
      left: 6%;
      width: 57%;
      @media (min-width: 768px) {
        top: 10%;
        left: -4%;
        width: 45%;
      }
    }

    &-lighterblue {
      left: 50%;
      top: 11%;
      width: 47%;

      mix-blend-mode: multiply;
      background-color: #a7e7f6;
      @media (min-width: 768px) {
        left: 28%;
        top: 30%;
        width: 39%;
      }
    }

    &-lightblue {
      left: 37%;
      top: 63%;
      width: 37%;
      mix-blend-mode: multiply;
      background-color: #85ccf6;
      @media (min-width: 768px) {
        left: 59%;
        top: 26%;
        width: 21%;
      }
    }

    &-blue {
      left: 25%;
      top: 0%;
      width: 57%;
      mix-blend-mode: multiply;
      background-color: #83caf4;
      @media (min-width: 768px) {
        left: 12%;
        top: -10%;
        width: 45%;
      }
    }

    &-darkblue {
      left: 18%;
      top: 44%;
      width: 22%;
      mix-blend-mode: multiply;
      background-color: #56a1c8;
      @media (min-width: 768px) {
        left: 33%;
        top: 15%;
        width: 14%;
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

    &-publications {
      font-size: 6vw;
      left: 18%;
      top: 44%;
      width: 22%;
      @media (min-width: 768px) {
        font-size: 2.2vw;
        left: 33%;
        top: 15%;
        width: 14%;
      }
    }

    &-articles {
      font-size: 8vw;
      left: 37%;
      top: 63%;
      width: 37%;
      @media (min-width: 768px) {
        font-size: 1.75vw;
        left: 59%;
        top: 26%;
        width: 21%;
        span {
          margin-top: 0;
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
    font-weight: 400;
    font-size: 6vw;
    @media (min-width: 768px) {
      font-size: 1.4vw;
    }
    &-shared {
      color: #3e5973;
      font-size: 10vw;
      text-transform: uppercase;
      top: 33.5%;
      left: 26.5%;
      font-weight: 600;
      @media (min-width: 768px) {
        font-size: 2.8vw;
        top: -5%;
        right: 26.5%;
        left: unset;
      }
    }

    &-through {
      right: 31%;
      top: 39%;
      @media (min-width: 768px) {
        top: 1%;
        right: 10%;
        left: unset;
      }
    }

    &-science {
      right: 4%;
      top: 30%;
      @media (min-width: 768px) {
        right: 25%;
        top: -17%;
      }
    }

    &-publications {
      right: 3%;
      top: 44%;
      width: 53%;
      @media (min-width: 768px) {
        top: 19%;
        right: -1%;
      }
    }

    &-more {
      right: 28.5%;
      top: 58%;
      @media (min-width: 768px) {
        right: 40%;
        top: 38%;
      }
    }

    &-articles {
      right: 24%;
      top: 80%;
      @media (min-width: 768px) {
        right: -3%;
        top: 38%;
      }
    }

    &-ampersand {
      color: #5d8cab;
      font-size: 10vw;
      right: 39%;
      top: 52%;
      @media (min-width: 768px) {
        font-size: 1.9vw;
        top: 21%;
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
      animation-delay: 0.3s;
    }
    .circle-lightblue {
      animation-delay: 0.375s;
    }
    .circle-darkblue {
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
