import styled from "styled-components";

export const TraveledDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  font-weight: 700;
  min-width: 70vw;
  min-height: 15vh;
  aspect-ratio: 0.55;
  justify-self: center;
  margin-top: 8rem;
  @media (min-width: 830px) {
    min-width: 35vw;
    aspect-ratio: 2.2;
    grid-row: 4 / 8;
    grid-column: 2 / 3;
    justify-self: right;
    margin-top: 0;
    margin-right: 10vw;
  }

  .circle {
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    position: absolute;

    &-lightblue {
      width: 70%;
      top: -1%;
      right: -1%;
      background-color: #a7e7f6;
      @media (min-width: 830px) {
        width: 46%;
        right: 20%;
      }
    }

    &-darkblue {
      background-color: #5d8cab;
      mix-blend-mode: multiply;
      width: 21%;
      top: 84%;
      left: 11%;
      @media (min-width: 830px) {
        width: 11%;
        left: unset;
        right: 11%;
        top: 39%;
      }
    }

    &-blue {
      width: 21%;
      top: 72%;
      left: 36%;
      background-color: #56a1c8;
      mix-blend-mode: multiply;
      @media (min-width: 830px) {
        width: 11%;
        left: unset;
        right: 16%;
        top: 21%;
      }
    }
  }

  .ship {
    position: absolute;
    top: -8%;
    right: -25%;
    width: 140%;
    @media (min-width: 830px) {
      right: 1%;
      top: -24%;
      width: 113%;
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
    width: 21%;
    font-size: 10vw;

    span {
      margin-top: 10%;
    }

    @media (min-width: 830px) {
      width: 11%;
      font-size: 2.4vw;
    }

    &-countries {
      top: 72%;
      left: 36%;
      @media (min-width: 830px) {
        width: 11%;
        left: unset;
        right: 16%;
        top: 21%;
      }
    }

    &-us {
      width: 21%;
      top: 84%;
      left: 11%;
      @media (min-width: 830px) {
        width: 11%;
        left: unset;
        right: 11%;
        top: 39%;
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
    font-weight: 400;
    &-traveled {
      color: #5a83a1;
      font-size: 12.7vw;
      text-transform: uppercase;
      top: 52%;
      left: 1%;
      font-weight: 800;
      @media (min-width: 830px) {
        font-size: 3.4vw;
        top: -16%;
        left: 47%;
      }
    }

    &-km {
      color: #5a83a1;
      font-weight: 800;

      font-size: 10.2vw;
      top: 62%;
      left: 16%;

      @media (min-width: 830px) {
        font-size: 2.45vw;
        top: 2%;
        right: 3%;
        left: unset;
      }
    }

    &-visiting {
      color: #56a1c8;
      font-size: 7vw;
      left: 5%;
      top: 74%;
      @media (min-width: 830px) {
        font-size: 1.6vw;
        left: unset;
        right: 28%;
        top: 29%;
      }
    }

    &-countries {
      color: #56a1c8;
      font-size: 7vw;
      left: 59.5%;
      top: 74%;
      @media (min-width: 830px) {
        font-size: 1.6vw;
        right: -2%;
        left: unset;
        top: 29%;
      }
    }

    &-ampersand {
      color: #5d8cab;
      font-size: 7vw;
      left: 0%;
      top: 87%;
      @media (min-width: 830px) {
        font-size: 2.6vw;
        right: 23%;
        left: unset;
        top: 43%;
      }
    }

    &-us {
      color: #5d8cab;
      font-size: 7vw;
      left: 36%;
      top: 84%;
      @media (min-width: 830px) {
        font-size: 1.5vw;
        right: -17%;
        left: unset;
        top: 38%;
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
    top: 33%;
    display: grid;
    grid-template-rows: 1fr auto;
    flex-direction: column;
    width: 20%;
    aspect-ratio: unset;
    text-align: center;
    color: #5d8baa;
    font-size: 3vw;
    font-weight: 400;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    @media (min-width: 830px) {
      font-size: 1.1vw;
      bottom: -30%;
      width: 15%;
      top: unset;
    }

    img {
      width: 100%;
      grid-row: 1/2;
      align-items: start;
    }

    span {
      grid-row: 2/3;
      align-items: end;
      white-space: nowrap;
      margin: 0;
    }

    &-spain {
      left: -10%;
    }

    &-puertorico {
      left: 13%;

      .us-extra {
        position: absolute;
        width: 55%;
        bottom: -10%;
        right: -10%;
      }
    }

    &-panama {
      left: 38%;
    }

    &-costarica {
      left: 62%;
    }

    &-ecuador {
      left: 85%;
    }

    @media (min-width: 830px) {
      &-spain {
        left: 0%;
      }

      &-puertorico {
        left: 16%;
      }

      &-panama {
        left: 32%;
      }

      &-costarica {
        left: 48%;
      }

      &-ecuador {
        left: 64%;
      }
    }
  }

  &.animated {
    .circle,
    .text,
    .numbers,
    .ship,
    .country > * {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-lightblue {
      animation-delay: 0.3s;
    }
    .circle-blue,
    .circle-darkblue {
      animation-delay: 0.375s;
    }
    .ship {
      animation-delay: 0.5s;
    }
    .text {
      animation-delay: 0.75s;
    }
    .numbers {
      animation-delay: 1.5s;
    }
    .country {
      img {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
        border-radius: 100%;
      }

      &-spain {
        img {
          animation-delay: 1.6s;
        }
        span {
          animation-delay: 1.65s;
        }
      }

      &-puertorico {
        img {
          animation-delay: 1.7s;
        }
        span {
          animation-delay: 1.75s;
        }
        .us-extra{
          animation-delay: 1.75s;
        }
      }

      &-panama {
        img {
          animation-delay: 1.8s;
        }
        span {
          animation-delay: 1.85s;
        }
      }

      &-costarica {
        img {
          animation-delay: 1.9s;
        }
        span {
          animation-delay: 1.95s;
        }
      }

      &-ecuador {
        img {
          animation-delay: 2s;
        }
        span {
          animation-delay: 2.05s;
        }
      }
    }
  }
`;
