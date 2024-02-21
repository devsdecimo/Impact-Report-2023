import styled from "styled-components";

export const BubbleImageContainer = styled.div`
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
      height: auto;
      top: 0%;
      left: 0%;
    }
    &-1 {
      mix-blend-mode: multiply;
      width: 55%;
      background-color: #a3cadb;
      left: 20%;
      top: 36%;
    }
    &-2 {
      mix-blend-mode: normal;
      width: 30%;
      background-color: #5d808f;
      left: 59%;
      top: 30%;
    }
    &-3 {
      mix-blend-mode: multiply;
      width: 15%;
      background-color: #80aed8;
      left: 68%;
      top: 62%;
    }
  }
`;
