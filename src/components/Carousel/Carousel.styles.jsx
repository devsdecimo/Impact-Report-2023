import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4;

  @media (min-width: 830px) {
    aspect-ratio: 11 / 5;
  }
`;

export const Slide = styled.div`
  min-width: 33.333%;
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;

  @media (max-width: 767px) {
    min-width: 70%;
  }

  &.center {
    z-index: 2;
    opacity: 1;
    transform: translateX(-50%) scale(1.2);
  }

  &.prev {
    z-index: 1;
    opacity: 0.5;
    transform: translateX(calc(-50% + 40.333%)) scale(0.8);
  }

  &.next {
    z-index: 1;
    opacity: 0;
    transform: translateX(calc(-50% + 40.333%)) scale(0.8);
  }

  &.prev {
    transform: translateX(calc(-50% - 40.333%)) scale(0.8);
  }

  &.first-next {
    opacity: 0.5;
  }

  &.center + &.next {
    opacity: 0.5;
  }

  &.first-next,
  &.prev,
  &.next {
    @media (max-width: 767px) {
      opacity: 0.02;
    }
  }

  img {
    width: 100%;
    display: block;
    cursor: grab;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

export const Dot = styled.span`
  padding: 5px;
  margin-right: 10px;
  margin-left:10px;
  cursor: pointer;
  border-radius: 50%;
  width: ${(props) => (props.actived ? "10px" : "10px")};
  height: ${(props) => (props.actived ? "10px" : "10px")};
  background: ${(props) => (props.actived ? "#5D808F" : "white")};
  border:1px solid #5D808F;
  transition: width 0.3s ease, height 0.3s ease;
  &:last-child {
    margin-right: 0;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 3em;
  color: #5d808f;
  z-index: 99;

  ${({ direction }) => (direction === "left" ? "left: 1%;" : "right: 1%;")}
  padding: 10px;

  @media (min-width: 515px) {
    ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}
  }

  @media (min-width: 768px) {
    ${({ direction }) =>
      direction === "left"
        ? "left: calc(5% + 10px);"
        : "right: calc(5% + 10px);"}
  }

  @media (min-width: 992px) {
    ${({ direction }) =>
      direction === "left"
        ? "left: calc(5% + 20px);"
        : "right: calc(5% + 20px);"}
  }

  @media (min-width: 1200px) {
    ${({ direction }) =>
      direction === "left"
        ? "left: calc(10% + 20px);"
        : "right: calc(10% + 20px);"}
  }

  @media (min-width: 1600px) {
    ${({ direction }) =>
      direction === "left"
        ? "left: calc(15% + 20px);"
        : "right: calc(15% + 20px);"}
  }

  &:hover {
    color: #344349;
  }
`;
