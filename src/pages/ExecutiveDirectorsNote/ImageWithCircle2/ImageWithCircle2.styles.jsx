import styled from "styled-components";

export const ImageWithCircle2Container = styled.div`
  position: relative;
  aspect-ratio: 22 / 19;
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

  .circle1 {
    height: 57.89%;
    aspect-ratio: 1 / 1;
    background-color: #aae4f2;
    opacity: 0.9;
    border-radius: 50%;
    position: absolute;
    z-index: 0;
    top: -2.25%;
    left: 54.5%;
  }
  .circle2 {
    height: 44.74%;
    aspect-ratio: 1 / 1;
    opacity: 1;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50.5%;
    left: 58.25%;
  }

  .circle3 {
    position: absolute;
    height: 92.11%;
    aspect-ratio: 1 / 1;
    z-index: 1;
    top: 0px;
    left: 0px;
  }
`;
