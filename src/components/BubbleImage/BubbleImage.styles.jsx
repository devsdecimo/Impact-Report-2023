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

  .circle {
    opacity: 0;
    transform: scale(0);
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
`;
