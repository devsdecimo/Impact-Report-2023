import styled from "styled-components";

export const BubbleImageContainer = styled.span`
  .circle,
  .image {
    opacity: 0;
    transform: scale(0);
  }

  &.type-1 {
    position: relative;
    display: flex;
    aspect-ratio: 4/3.2;

    .circle {
      border-radius: 100%;
      aspect-ratio: 1/1;
      position: absolute;

      &-image {
        object-fit: cover;
        width: 65%;
      }
      &-1 {
        mix-blend-mode: multiply;
        width: 55%;
        background-color: #a3cadb;
      }
      &-2 {
        mix-blend-mode: normal;
        width: 30%;
        background-color: #5d808f;
      }
      &-3 {
        mix-blend-mode: multiply;
        width: 15%;
        background-color: #80aed8;
      }

      ${(props) =>
        props.direction === "down" &&
        `
      &-image {
        top: 0%;
        left: 0%;
      }
      &-1 {
        top: 36%;
        left: 20%;
      }
      &-2 {
        top: 30%;
        left: 59%;
      }
      &-3 {
        top: 62%;
        left: 68%;
      }
    `};

      ${(props) =>
        props.direction === "up" &&
        `
      &-image {
        bottom: 0%;
        right: 10%;
      }
      &-1 {
        bottom: 36%;
        right: 30%;
      }
      &-2 {
        bottom: 30%;
        right: 69%;
      }
      &-3 {
        bottom: 62%;
        right: 78%;
      }
      }
    `};
    }

    &.animated {
      .circle {
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      .circle-2 {
        animation-delay: 0.25s;
      }
      .circle-3 {
        animation-delay: 0.375s;
      }
      .circle-image {
        animation-delay: 0.75s;
      }
    }
  }

  &.type-2 {
    display: flex;
    position: relative;
    height: 320px;
    width: 320px;
    margin-left: 3rem;
    margin-bottom: 50px;
    /*margin-top: 3rem;
    transform: scale(1.2);*/
    @media (max-width: 829px) {
      margin: auto;
      transform: scale(1);
    }

    img {
      position: absolute;
      width: 250px;
      height: auto;
      z-index: 2;
      top: 50px;
      right: 0px;
    }
    .circle {
      &-1 {
        width: 168px;
        height: 168px;
        background-color: #80aed8;
        mix-blend-mode: multiply;
        opacity: 0.5;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 30px;
      }

      &-2 {
        width: 108px;
        height: 108px;
        background-color: #80aed8;
        mix-blend-mode: multiply;
        opacity: 0.8;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 100px;
        left: 00px;
      }
    }

    &.animated {
      .circle {
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      .circle-2 {
        animation-delay: 0.375s;
      }
      .circle-image {
        animation-delay: 0.75s;
      }
    }
  }

  &.type-3 {
    display: flex;
    position: relative;
    height: 380px;
    width: 450px;
    margin-right: ${(props) =>
      props.orientation && props.orientation == "left" ? "2rem" : "0"};
    margin-left: ${(props) =>
      props.orientation && props.orientation == "right" ? "2rem" : "0"};
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 829px) {
      margin: auto;
      margin-bottom: 1rem;
    }
    @media (min-width: 930px) {
      float: ${(props) => (props.orientation ? props.orientation : "left")};
      /*margin-top:-2rem;*/
    }
    @media (max-width: 500px) {
      transform: scale(0.8);
      margin-left: -10%;
    }

    img {
      position: absolute;
      width: 350px;
      height: auto;
      top: 50px;
      right: 40px;
    }
    .circle {
      &-1 {
        width: 200px;
        height: 200px;
        background-color: #b7cee3;
        mix-blend-mode: multiply;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
      }
      &-2 {
        width: 170px;
        height: 170px;
        background-color: #d8e1e9;
        mix-blend-mode: multiply;
        border-radius: 50%;
        position: absolute;
        top: -1rem;
        right: 100px;
      }
      &-3 {
        width: 330px;
        height: 330px;
        background-color: #8ab4d9;
        mix-blend-mode: multiply;
        border-radius: 50%;
        position: absolute;
        top: 30px;
        left: 0;
      }
    }

    &.animated {
      .circle {
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      .circle-2 {
        animation-delay: 0.25s;
      }
      .circle-3 {
        animation-delay: 0.375s;
      }
      .circle-image {
        animation-delay: 0.75s;
      }
    }
  }

  &.type-4 {
    display: flex;
    position: relative;
    height: 250px;
    width: 230px;
    margin-left: 20px;
    margin-bottom: 0px;
    margin-top: 2rem;
    @media (max-width: 829px) {
      margin: auto;
      transform: scale(1);
    }

    .image {
      position: absolute;
      width: 350px;
      height: auto;
      z-index: 2;
      top: -30px;
      right: -30px;
    }

    .circle {
      &-1 {
        width: 180px;
        height: 180px;
        background-color: #80aed8;
        mix-blend-mode: multiply;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 35px;
      }
      &-2 {
        width: 120px;
        height: 120px;
        background-color: #a3cadb;
        mix-blend-mode: multiply;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: 100px;
        right: 110px;
      }
    }

    &.animated {
      .circle,
      .image {
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      .circle-2 {
        animation-delay: 0.375s;
      }
      .image {
        animation-delay: 0.75s;
      }
    }
  }
`;
