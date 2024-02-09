import styled from "styled-components";

export const TraveledDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-right: 10vw;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  aspect-ratio: 1.9;
  justify-self: center;
  margin-top: 8rem;
  @media (min-width: 830px) {
    min-width: 35vw;
    aspect-ratio: 2.2;
    grid-row: 4 / 8;
    grid-column: 2 / 3;
    justify-self: right;
    margin-top: 0;
  }

  img {
    position: absolute;
  }

  .circle-lightblue {
    width: 46%;
    aspect-ratio: 1 / 1;
    top: 0;
    bottom: 0;
    right: 20%;
  }

  .circle-blue,
  .circle-darkblue {
    position: absolute;
    background-size: contain;
    width: 11%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    mix-blend-mode: multiply;
  }

  .circle-darkblue {
    right: 11%;
    top: 39%;
    transform: translateY(-50%);
  }

  .circle-blue {
    right: 16%;
    top: 21%;
    transform: translateY(-50%);
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
      font-size: 2.4vw;
    }

    &-countries {
      right: 20%;
      top: 25.5%;
      transform: translateY(-50%);
    }

    &-us {
      right: 14.5%;
      top: 44%;
      transform: translateY(-50%);
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
      color: #5a83a1;
      font-size: 8vw;
      text-transform: uppercase;
      top: -17%;
      left: 40%;
      @media (min-width: 830px) {
        font-size: 3.4vw;
      }
    }

    &-km {
      color: #5a83a1;
      font-size: 6vw;
      top: 0%;
      right: -6%;
      @media (min-width: 830px) {
        font-size: 3.4vw;
      }
    }

    &-visiting {
      color: #56a1c8;
      font-size: 3vw;
      right: 28%;
      top: 29%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 1.6vw;
      }
    }

    &-countries {
      color: #56a1c8;
      font-size: 3vw;
      right: -2%;
      top: 29%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 1.6vw;
      }
    }

    &-ampersand {
      color: #5d8cab;
      font-size: 5vw;
      right: 23%;
      top: 43%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 3vw;
      }
    }

    &-us {
      color: #5d8cab;
      font-size: 3vw;
      right: -17%;
      top: 38%;
      transform: translateY(-50%);
      @media (min-width: 830px) {
        font-size: 1.5vw;
      }
    }
  }

  & > *,
  & > .country > * {
    opacity: 0;
    transform: scale(0);
  }

  .country {
    opacity: 1;
    transform: scale(1);
    position: absolute;
    bottom: -10%;
    display: grid;
    grid-template-rows: 1fr auto;
    flex-direction: column;
    width: 14%;
    aspect-ratio: 0.65;
    text-align: center;
    color: #5d8baa;
    font-size: 2.4vw;

    @media (min-width: 830px) {
      font-size: 1.1vw;
      bottom: -30%;
    }

    img {
      width: 100%;
      grid-row: 1/2;
      align-items: start;
    }
    p {
      grid-row: 2/3;
      align-items: end;
      white-space: nowrap;
    }

    &-spain {
      left: 2%;
    }

    &-puertorico {
      left: 18%;
    }

    &-panama {
      left: 34%;
    }

    &-costarica {
      left: 50%;
    }

    &-ecuador {
      left: 66%;
    }
  }

  &.animated {
    .circle-lightblue,
    .circle-blue,
    .circle-darkblue,
    .text,
    .numbers,
    .ship,
    .country > * {
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
    .ship {
      animation-delay: 1.5s;
    }
    .text {
      animation-delay: 2s;
    }
    .numbers {
      animation-delay: 2.5s;
    }
    .country {
      &-spain {
        img {
          animation-delay: 3s;
        }
        p {
          animation-delay: 4s;
        }
      }

      &-puertorico {
        img {
          animation-delay: 3.2s;
        }
        p {
          animation-delay: 4.2s;
        }
      }

      &-panama {
        img {
          animation-delay: 3.4s;
        }
        p {
          animation-delay: 4.4s;
        }
      }

      &-costarica {
        img {
          animation-delay: 3.6s;
        }
        p {
          animation-delay: 4.6s;
        }
      }

      &-ecuador {
        img {
          animation-delay: 3.8s;
        }
        p {
          animation-delay: 4.8s;
        }
      }
    }
  }
`;
