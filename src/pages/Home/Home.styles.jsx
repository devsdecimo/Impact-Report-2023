import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0;
  margin: 0;
  background-image: url("/assets/images/home/BG-watercolor.webp");
  background-size: cover;
  background-repeat: repeat-y;
  min-height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;

  &::after {
    content: "";
    width: 100vw;
    height: 18vh;
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    background: url("/assets/images/home/center-line.webp");
    background-size: 100% 100%;
    opacity: 0.3;

    @media (min-width: 768px) {
      display: grid;
      height: 50vh;
      top: 50%;
    }
  }

  .home_content {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    width: 100vw;

    &__expeditions {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      @media (min-width: 768px) {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__main_image_container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__main_image {
      max-width: 100%;
      max-height: 35vh;
      animation: fadein 1.5s linear 0s;
      animation-fill-mode: forwards;
    }

    @media (min-width: 768px) {
      display: grid;
      &__expeditions {
        max-height: 75vh;
      }
      .expedition_button {
        position: absolute;

        &_one {
          bottom: 0%;
          left: -1%;
        }

        &_two {
          bottom: 35%;
          left: -17%;
        }

        &_three {
          bottom: 70%;
          left: -10%;
        }

        &_four {
          top: -12%;
          left: 20%;
        }

        &_five {
          top: -12%;
          right: 20%;
        }

        &_six {
          bottom: 70%;
          right: -10%;
        }

        &_seven {
          bottom: 35%;
          right: -17%;
        }

        &_eight {
          bottom: 0%;
          right: -1%;
        }
      }
      .title {
        width: 20vw;
        height: 50vh;
        align-self: end;
        justify-self: end;
        z-index: 2;
      }

      &__main_image_container {
        display: contents;
      }
      &__main_image {
        max-height: 75vh;
      }
    }

    .title {
      max-width: 20vw;
      max-height: 45vh;
      padding: 1rem;
    }
  }

  .animatedBG {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/assets/images/home/OceanTile.png");
    height: 100vh;
    width: 100vw;
    opacity: 0.25;
    animation: move 80s cubic-bezier(0.5, 0, 0.4, 1) infinite;
    background-size: contain;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  @keyframes move {
    0% {
      background-position: 0% 0;
    }

    50% {
      background-position: 500% 0;
    }
    100% {
      background-position: 0% 0;
    }
  }

  .mobile_divisor {
    width: 100vh;
    height: 1px;
    background: none;
    border: none;
    margin: -1.5rem 0;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
