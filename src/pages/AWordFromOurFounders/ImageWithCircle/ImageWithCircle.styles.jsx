import styled from "styled-components";

export const ImageWithCircleContainer = styled.div`
  display: flex;
  position: relative;
  aspect-ratio: 20 / 19;
  margin: 2%;
  width: 40vw;

 
  @media (min-width: 768px) {
    max-width: 350px;
    width: 18vw;
    float: ${props=> props.orientation};
    margin-right: ${(props) =>
      props.orientation && props.orientation == "left" ? "2rem" : "0"};
    margin-left: ${(props) =>
      props.orientation && props.orientation == "right" ? "2rem" : "0"};
  }

  @media (min-width: 1400px) {
    align-self: start;
    max-width: 260px;
  }


  img {
    position: absolute;
    height: 88.32%;
    width: auto;
    top: 13.25%;
    right: 0px;
  }
  .circle1 {
    height: 84.21%;
    aspect-ratio: 1 / 1;
    background-color: #80aed8;
    opacity: 0.1;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .circle2 {
    height: 86.84%;
    aspect-ratio: 1 / 1;
    opacity: 1;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: -16%;
  }
  .circle3 {
    height: 84.21%;
    aspect-ratio: 1 / 1;
    background-color: #80aed8;
    opacity: 0.9;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
