import styled from "styled-components";

export const ImageWithCircle2Container = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 19 / 21;
  width: 40vw;

  @media (min-width: 1200px) {
    align-self: flex-start;
  }
  @media (min-width: 768px) {
    max-width: 260px;
    align-self: center;
    width: 18vw;
    margin-right: ${(props) =>
      props.orientation && props.orientation == "left" ? "2rem" : "0"};
    margin-left: ${(props) =>
      props.orientation && props.orientation == "right" ? "2rem" : "0"};
    float: ${(props) => props.orientation};
  }

  .circle {
    aspect-ratio: 1 / 1;
    border-radius: 100%;

    &-image {
      object-fit: cover;
      height: 80%;
      position: absolute;
      left: 0;
      top: 0;
    }

    &-1 {
      height: 35%;
      background-color: #77b9e0;
      mix-blend-mode: multiply;
      position: absolute;
      top: 23%;
      right: -12%;
    }

    &-2 {
      height: 35%;
      background-color: #344b62;
      mix-blend-mode: multiply;
      position: absolute;
      top: 48%;
      left: 62.5%;
    }

    &-3 {
      position: absolute;
      background-color: #d9dbdd;
      height: 75%;
      bottom: -5%;
      right: -16%;
    }
  }

  .circle,
  .image {
    transform: scale(0);
  }

  &.animated {
    .circle,
    .image,
    .circleImage {
      animation: fade-in 1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .circle-2 {
      animation-delay: 0.25s;
    }
    .circle-4 {
      animation-delay: 0.375s;
    }
    .circle-image {
      animation-delay: 0.75s;
    }
  }
`;
