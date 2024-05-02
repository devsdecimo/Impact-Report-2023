import styled from "styled-components";

export const CarouselBrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  flex-wrap: nowrap;
  max-width: 100vw;
  &.all-visible {
    overflow: visible;
  }
`;

export const SlidesContainer = styled.div`
  display: flex;
  width: calc(150px * ${(props) => props.totalSlides});
  transition: ${(props) =>
    props.enabledTransition ? "transform 0.2s ease-in-out" : "0s"};
  transform: translateX(
    calc(50% - ${(props) => (props.currentIndex + 0.5) * 160}px)
  );
  @media (min-width: 768px) {
    transform: translateX(
      calc(50% - ${(props) => (props.currentIndex + 0.5) * 150}px)
    );
  }

  &.all-visible {
    justify-content: center;
    column-gap: 1.5rem;
    transform: none;
    min-width: 80vw;
    max-width: 100vw;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  transition: ${(props) =>
    props.enabledTransition ? " opacity 0.2s ease" : "0s"};
  opacity: 1;
  height: 60px;
  width: 140px;

  &.all-visible {
    display: contents;
    .slide-image {
      display: contents;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .slide-image {
    height: 60px;
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      display: block;
      object-fit: contain;
      transition: 1s;
      &.vertical {
        max-height: unset;
        height: 60px;
      }
      &.horizontal {
        max-width: unset;
        width: 140px;
      }
    }
  }

  &.hidden {
    opacity: 0;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  box-shadow: 0 0 7px #ffffff;
  background-color: transparent;
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  width: 20%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  font-size: 3em;
  color: #3e5973;
  z-index: 2;

  @media (min-width: 768px) {
    width: 10%;
  }

  ${({ direction }) => (direction === "left" ? "left: 0%;" : "right: 0%;")}
`;
