import styled, { keyframes } from "styled-components";

export const CarouselNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  flex-wrap: nowrap;
  margin: 2rem 0;
  padding: 1rem 0;
  max-width: 100vw;
  min-height: 250px;
  animation: frombottomwait 1s ease-in-out;
  &.all-visible {
    overflow: visible;
  }
`;

export const SlidesContainer = styled.div`
  display: flex;
  width: calc(150px * ${(props) => props.totalSlides});
  &:not(.all-visible) {
    transition: ${(props) =>
      props.enabledTransition ? "transform 0.2s ease-in-out" : "0s"};
  }

  transform: translateX(
    calc(50% - ${(props) => (props.currentIndex + 0.5) * 160}px)
  );

  &.all-visible {
    justify-content: center;
    column-gap: 2vw;
    transform: none;
    min-width: 80vw;
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  transition: ${(props) =>
    props.enabledTransition ? " opacity 0.2s ease" : "0s"};
  opacity: 1;
  width: 120px;
  height: 120px;
  aspect-ratio: 1/1;

  .slide-image {
    border-radius: 100%;
    border: 0.4rem solid #3e5973;
    aspect-ratio: 1/1;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: auto;
      height: 105%;
      display: block;
      object-fit: contain;
      transition: 1s;
    }
  }

  a {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .slide-text {
    text-align: center;
    color: #3e5973;
    font-weight: 600;
    font-size: 1.2rem;
    padding-top: 0.4rem;
  }

  &:hover {
    .image-container img {
      /* transform: scale(1.1); */
    }
  }

  &.hidden {
    opacity: 0;
  }

  &.active {
    .slide-image {
      border-width: 0.5rem;
      border-color: #77a2ca;
      transform: scale(1.1);
    }

    .slide-text {
      color: #77a2ca;
      font-weight: 900;
    }
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 70%;
  background-color: transparent;
  height: 100%;
  width: 21%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  font-size: 3em;
  color: #3e5973;
  text-shadow: 0 0 20px rgba(255, 255, 255, 1);
  z-index: 2;

  @media (min-width: 400px) {
    width: 10%;
  }

  @media (min-width: 768px) {
    box-shadow: 0 0 7px rgba(250, 250, 250, 1);
    background: rgba(250, 250, 250, 0.8);
    top: 50%;
  }

  ${({ direction }) => (direction === "left" ? "left: 0%;" : "right: 0%;")}
`;
