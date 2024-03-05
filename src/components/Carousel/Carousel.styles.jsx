import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  aspect-ratio: 7 / 4;

  @media (min-width: 768px) {
    aspect-ratio: 14 / 5;
  }
`;

export const Slide = styled.div`
  min-width: 70%;
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: absolute;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0.7;

  @media (min-width: 768px) {
    min-width: 33.333%;
  }

  &.center {
    z-index: 2;
    opacity: 1;
    transform: translateY(-50%) translateX(-50%) scale(1.1);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  &.prev,
  &.next,
  &.first-next,
  &.center {
    top: 42%;
  }

  &.prev {
    z-index: 1;
    opacity: 0.5;
    transform: translateY(-50%) translateX(calc(-70% + 40.333%));
    height: 62%;
  }

  &.next {
    z-index: 1;
    opacity: 0;
    transform: translateY(-50%) translateX(calc(-30% + 40.333%));
    height: 62%;
  }

  &.prev {
    transform: translateY(-50%) translateX(calc(-70% - 40.333%));
    height: 62%;
  }

  &.first-next {
    opacity: 0.5;
  }

  &.center + &.next {
    opacity: 0.5;
  }

  &.first-next,
  &.prev,
  &.next,
  &.center + &.next {
    display: flex;
    @media (max-width: 768px) {
      opacity: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    cursor: grab;
    aspect-ratio: 16 / 9;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Dot = styled.span`
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background: ${(props) => (props.actived ? "#3E5973" : "transparent")};
  border: 2px solid #3E5973;
  transition: width 0.3s ease, height 0.3s ease;
  z-index: 2;
  &:last-child {
    margin-right: 0;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: #3E5973;
  z-index: 2;

  ${({ direction }) => (direction === "left" ? "left: -2%;" : "right: -2%;")}
  padding: 10px;

  @media (min-width: 515px) {
    ${({ direction }) => (direction === "left" ? "left: 1%;" : "right: 1%;")}
  }

`;
