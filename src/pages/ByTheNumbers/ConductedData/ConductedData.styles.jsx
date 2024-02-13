import styled from "styled-components";

export const ConductedDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  aspect-ratio: 1.7;
  justify-self: center;
  margin-top: 8rem;
  margin-left: -8rem;
  @media (min-width: 830px) {
    min-width: 30vw;
    aspect-ratio: 2.1;
    grid-row: 24 / 31;
    grid-column: 1 / 2;
    justify-self: left;
    margin-top: 0;
    margin-left: 10vw;
  }

  img {
    position: absolute;
  }

  .image {
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .circle-bg {
    position: absolute;
    width: 42%;
    left: 10%;
    top: -8%;
  }

  .circle-over {
    mix-blend-mode: overlay;
    left: 36%;
    width: 28%;
    top: 7%;
  }

  .circle-overbg {
    left: 36%;
    width: 28%;
    top: 7%;
  }

  .circle-darkblue {
    right: 25.5%;
    top: 30%;
    width: 15%;
    mix-blend-mode: multiply;
    @media (min-width: 830px) {
      width: 18%;
    }
  }

  .circle-blue {
    right: 25%;
    top: 53%;
    width: 15%;
    mix-blend-mode: multiply;
    @media (min-width: 830px) {
      width: 18%;
      right: 23%;
    }
  }

  .circle-lightblue {
    right: 31%;
    top: 69%;
    width: 15%;
    mix-blend-mode: multiply;
    @media (min-width: 830px) {
      width: 18%;
      right: 29%;
      top: 83%;
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

    &-ctd {
      font-size: 3.8vw;
      right: 25.5%;
      top: 30%;
      width: 15%;
      @media (min-width: 830px) {
        font-size: 2.2vw;
        width: 18%;
      }
    }

    &-underwater {
      font-size: 3.8vw;
      width: 15%;
      right: 25%;
      top: 53%;
      @media (min-width: 830px) {
        font-size: 2.2vw;
        width: 18%;
        right: 23%;
        padding-top: 1%;

      }
    }

    &-hours {
      font-size: 3vw;
      right: 31%;
      top: 69%;
      width: 15%;
      @media (min-width: 830px) {
        font-size: 1.9vw;
        width: 18%;
        right: 29%;
        top: 83%;
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
    &-conducted {
      color: #56a1c8;
      font-size: 6vw;
      text-transform: uppercase;
      top: 5%;
      left: 35%;
      @media (min-width: 830px) {
        font-size: 3vw;
      }
    }

    &-ctd {
      color: #3e5973;
      font-size: 4.3vw;
      font-weight: 400;
      right: -2%;
      top: 38%;
      @media (min-width: 830px) {
        font-size: 2.1vw;
        right: -4%;
        top: 35%;
      }
    }

    &-ampersand {
      color: #3e5973;
      font-size: 4.3vw;
      font-weight: 400;
      right: -9%;
      top: 40%;
      @media (min-width: 830px) {
        font-size: 2.1vw;
        right: -11%;
      }
    }

    &-underwater {
      color: #56a1c8;
      font-size: 4vw;
      font-weight: 400;
      right: -24%;
      top: 54%;
      width: 48%;
      @media (min-width: 830px) {
        font-size: 2.1vw;
        right: -37%;
        top: 57%;
        width: 58%;
      }
    }

    &-totaling {
      color: #85ccf6;
      font-size: 3vw;
      font-weight: 400;
      right: 47%;
      top: 79%;
      @media (min-width: 830px) {
        font-size: 1.5vw;
        right: 49%;
        top: 96%;
      }
    }

    &-hours {
      color: #85ccf6;
      font-size: 3.2vw;
      font-size: 3vw;
      font-weight: 400;
      right: -19%;
      top: 79%;
      @media (min-width: 830px) {
        font-size: 1.5vw;
        top: 96%;
        right: -29%;
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
    .image {
      animation-delay: 0.5s;
    }
    .circle-over,
    .circle-overbg {
      animation-delay: 1s;
    }
    .circle-darkblue {
      animation-delay: 1.5s;
    }
    .circle-blue {
      animation-delay: 1.75s;
    }
    .circle-lightblue {
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
