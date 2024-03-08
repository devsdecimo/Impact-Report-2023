import styled from "styled-components";

export const ImageWithCircleContainer = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 20 / 19;
  margin: 2%;
  width: 40vw;

  @media (min-width: 768px) {
    max-width: 400px;
    width: 18vw;
    float: ${(props) => props.orientation};
    margin-right: ${(props) =>
      props.orientation && props.orientation == "left" ? "2rem" : "0"};
    margin-left: ${(props) =>
      props.orientation && props.orientation == "right" ? "2rem" : "0"};
  }

  @media (min-width: 1400px) {
    align-self: start;
    max-width: 300px;
  }

  .circleImage {
    position: absolute;
    height: 75%;
    width: auto;
    top: -10%;
    left: 10%;
  }

  .image {
    position: absolute;
    height: 99%;
    width: auto;
    bottom: 0;
    left: 0;
  }

  .circle-1 {
    height: 78%;
    aspect-ratio: 1 / 1;
    background-color: #80aed8;
    mix-blend-mode: multiply;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .circle-2 {
    height: 64%;
    aspect-ratio: 1 / 1;
    background-color: #d9dbdd;
    mix-blend-mode: multiply;
    border-radius: 100%;
    position: absolute;
    top: 22%;
    right: 0%;
  }

  .circle,
  .image,
  .circleImage {
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
      animation-delay: 0.1875s;
    }
    .circleImage {
      animation-delay: 0.25s;
    }
    .circle-1 {
      animation-delay: 0.375s;
    }
    .image {
      animation-delay: 0.75s;
    }
  }
`;
