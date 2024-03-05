import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0;
  margin: 0;
  background-image: url("/assets/images/home/Background.webp");
  background-size: auto 100vh;
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
  background-attachment: fixed !important;
  position: relative;

  @media (min-width: 768px) {
    background-size: cover;
  }

  &::after {
    display: none;
    content: "";
    width: 100vw;
    height: 18vh;
    position: absolute;
    top: 40vh;
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
      animation-fill-mode: forwards;
      max-height: 27vh;
      margin-top: -24vh;
      margin-left: 3vh;
      @media (min-width: 768px) {
        max-width: 100%;
        max-height: 70vh;
        margin-top: 0;
        margin-left: 0;
      }
    }

    @media (min-width: 768px) {
      display: grid;
      &__expeditions {
      }
      .expedition_button {
        position: absolute;

        &_one {
          bottom: 3%;
          left: 1%;
        }

        &_two {
          bottom: 35%;
          left: -13%;
        }

        &_three {
          bottom: 70%;
          left: -7%;
        }

        &_four {
          top: -10%;
          left: 22%;
        }

        &_five {
          top: -10%;
          right: 22%;
        }

        &_six {
          bottom: 70%;
          right: -7%;
        }

        &_seven {
          bottom: 35%;
          right: -13%;
        }

        &_eight {
          bottom: 3%;
          right: 1%;
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
        max-height: 74vh;
      }
    }

    .title {
      max-width: 25vw;
      height: 24vh;
      padding: 1rem;
      object-fit: contain;
      @media (min-width: 768px) {
        width: 20vw;
        height: 50vh;
      }
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
    animation: move 120s ease-in-out infinite;
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

  .mobile-bg {
    position: fixed;
    top: -10vw;
    bottom: -10vh;
    left: -10vw;
    right: -10vw;
    height: 120vh;
    width: 120vw;
    background-image: url("/assets/images/home/Background.webp");
    background-size: cover;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
