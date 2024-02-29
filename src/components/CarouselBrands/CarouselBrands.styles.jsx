import styled from "styled-components";

export const CarouselBrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 14em;
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
    visibility: hidden;
  }

  &.next {
    z-index: 1;
    opacity: 0;
    transform: translateX(calc(-50% + 40.333%)) scale(0.8);
    visibility: hidden;
  }

  &.prev {
    transform: translateX(calc(-50% - 40.333%)) scale(0.8);
  }

  &.first-next {
    opacity: 0.5;
    visibility: hidden;
  }

  &.center + &.next {
    opacity: 0.5;
  }

  img {
    width: auto;
    margin: auto;
    display: block;
    cursor: grab;
    object-fit: contain;
    width: 70%;
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
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  width: ${(props) => (props.actived ? "10px" : "5px")};
  height: ${(props) => (props.actived ? "10px" : "5px")};
  background: ${(props) => (props.actived ? "#5D808F" : "white")};
  border: 1px solid #5d808f;
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
  opacity: 0.5;
  z-index: 2;

  ${({ direction }) => (direction === "left" ? "left: 2%;" : "right: 2%;")}
  padding: 10px;

  @media (min-width: 515px) {
    ${({ direction }) => (direction === "left" ? "left: 2%;" : "right: 2%;")}
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
        ? "left: calc(20% + 20px);"
        : "right: calc(20% + 20px);"}
  }

  &:hover {
    color: #344349;
  }
`;
