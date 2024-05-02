import styled from "styled-components";

export const BubbleImageContainer = styled.span`
  padding: 0.5rem;
  .circle,
  .image {
    opacity: 0;
    transform: scale(0);
  }

  &.type-1{
    position: relative;
    display: flex;
    aspect-ratio: 4/3.8;
    //margin-right:2rem;
    //margin-bottom:2rem;

    .circle {
      border-radius: 100%;
      aspect-ratio: 1/1;
      position: absolute;

      &-image {
        object-fit: cover;
        width: 73%;
      }
      &-1 {
        mix-blend-mode: multiply;
        width: 61.8%;
        background-color: #a3cadb;
      }
      &-2 {
        mix-blend-mode: normal;
        width: 33.71%;
        background-color: #5d808f;
      }
      &-3 {
        mix-blend-mode: multiply;
        width: 16.85%;
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
        left: 22.47%;
      }
      &-2 {
        top: 30%;
        left: 66.29%;
      }
      &-3 {
        top: 60%;
        left: 76.4%;
      }
    `};

      ${(props) =>
        props.direction === "up" &&
        `
      &-image {
        bottom: 0%;
        right: 0%;
      }
      &-1 {
        bottom: 36%;
        right: 22.36%;
      }
      &-2 {
        bottom: 30%;
        right: 64.43%;
      }
      &-3 {
        bottom: 60%;
        right: 74.13%;
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
    width: 57vw;
    max-width: 320px;
    aspect-ratio: 1 / 1;
    margin-left: 3rem;
    margin-bottom: 0;
    @media (max-width: 768px) {
      margin: auto;
    }

    img {
      position: absolute;
      width: 78%;
      height: auto;
      z-index: 2;
      top: 15%;
      right: 0px;
    }
    .circle {
      aspect-ratio: 1 / 1;
      &-1 {
        width: 52%;
        background-color: #80aed8;
        mix-blend-mode: multiply;
        opacity: 0.5;
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 10%;
      }

      &-2 {
        width: 34%;
        background-color: #80aed8;
        mix-blend-mode: multiply;
        opacity: 0.8;
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        top: 31%;
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
    width: 65.7vw;
    aspect-ratio: 45 / 38;
    margin: 1rem;
    @media (min-width: 768px) {
      width: 14.666vw;
      margin: 2rem;
    }

    img {
      position: absolute;
      height: 92.11%;
      aspect-ratio: 1 / 1;
      top: 13%;
      right: 9%;
    }
    .circle {
      &-1 {
        height: 52.63%;
        aspect-ratio: 1 / 1;
        background-color: #b7cee3;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        top: 0;
        right: 0;
      }
      &-2 {
        height: 44.74%;
        aspect-ratio: 1 / 1;
        background-color: #d8e1e9;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        top: -4%;
        right: 22%;
      }
      &-3 {
        height: 86.84%;
        aspect-ratio: 1 / 1;
        background-color: #8ab4d9;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        top: 8%;
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
    width: 250px;
    aspect-ratio: 25 / 30;
    margin-left: 20px;
    margin-bottom: 0px;
    margin-top: 2rem;

    .image {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
      top: -4%;
      right: 0%;
      aspect-ratio: 1 / 1;
      object-position: bottom right;
      object-fit: contain;
    }

    .circle {
      &-1 {
        width: 180px;
        height: 180px;
        background-color: #80aed8;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        top: 19%;
        right: 18%;
      }
      &-2 {
        width: 120px;
        height: 120px;
        background-color: #a3cadb;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 60%;
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

  &.type-5 {
    display: flex;
    position: relative;
    height: 250px;
    width: 230px;
    margin-left: 20px;
    margin-bottom: 0px;
    @media (min-width: 829px) {
      width: 15vw;
      height: auto;
      aspect-ratio: 7 / 7;
    }

    .image-1 {
      position: absolute;
      width: 75%;
      height: auto;
      bottom: 0;
      right: 0;
    }

    .image-2 {
      position: absolute;
      width: 54%;
      height: auto;
      top: 0;
      left: 0;
    }

    .circle {
      &-1 {
        width: 17%;
        aspect-ratio: 1 / 1;
        background-color: #80aed8;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        top: 38%;
        left: -1%;
      }
      &-2 {
        width: 30%;
        aspect-ratio: 1 / 1;
        background-color: #5d808f;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        top: 49%;
        left: 7%;
      }
      &-3 {
        width: 53%;
        aspect-ratio: 1 / 1;
        background-color: #a3cadb;
        mix-blend-mode: multiply;
        border-radius: 100%;
        position: absolute;
        top: 9%;
        left: 5%;
      }
      &-4 {
        width: 67%;
        aspect-ratio: 1 / 1;
        background-color: #80aed8;
        border-radius: 100%;
        position: absolute;
        bottom: -1%;
        right: 2%;
      }
    }

    &.animated {
      .circle:not(.circle-4),
      .image {
        animation: fade-in 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      .circle-2 {
        animation-delay: 0.1875s;
      }
      .circle-3 {
        animation-delay: 0.25s;
      }
      .circle-4 {
        animation: fadein60 1s ease-in-out;
        animation-fill-mode: forwards;
        animation-delay: 0.375s;
        opacity: 0.6;
      }
      .image {
        animation-delay: 0.75s;
      }
    }
  }

  @media (min-width: 768px) {
    float: ${(props) => props.orientation};
    margin-right: ${(props) =>
      props.orientation && props.orientation == "left" ? "2rem" : "0"};
    margin-left: ${(props) =>
      props.orientation && props.orientation == "right" ? "2rem" : "0"};
  }

  @keyframes fadein60 {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    100% {
      opacity: 0.6;
      transform: scale(1);
    }
  }
`;
