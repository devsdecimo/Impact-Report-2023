import styled from "styled-components";

export const ExpeditionsDataContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin: 10vw;
  font-weight: 700;
  min-width: 80vw;
  min-height: 15vh;

  @media (min-width: 830px) {
    min-width: 600px;
    min-height: 260px;
  }

  img {
    position: absolute;
  }

  .circle-image {
    width: 44%;
    aspect-ratio: 1 / 1;
    top: 0;
    bottom: 0;
    left: 0;
  }

  .circle-gray {
    position: absolute;
    width: 44%;
    aspect-ratio: 1 / 1;
    top: -10%;
    left: -10%;
    opacity: 0.5;
  }

  .circle-blue,
  .circle-darkblue {
    position: absolute;
    background-size: contain;
    width: 21%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    mix-blend-mode: multiply;
  }

  .circle-darkblue {
    right: 40%;
    top: 36%;
    transform: translateY(-50%);
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
    &-expeditions {
      color: #56a1c8;
      font-size: 8vw;
      text-transform: uppercase;
      top: -20%;
      left: 36%;
      @media (min-width: 830px) {
        top: -24%;
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
        font-size: 2.5rem;
      }
    }
  }

  * {
    opacity: 0;
    transform: scale(0);
  }

  &.animated {
    .circle-gray,
    .circle-image,
    .circle-blue,
    .circle-darkblue,
    .text,
    .numbers {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-image {
      animation-delay: 1s;
    }
    .circle-blue,
    .circle-darkblue {
      animation-delay: 2s;
    }
    .text {
      animation-delay: 3s;
    }
    .numbers {
      animation-delay: 4s;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
