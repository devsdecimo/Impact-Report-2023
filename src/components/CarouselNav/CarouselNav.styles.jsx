import styled from "styled-components";

export const CarouselNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  flex-wrap: nowrap;
  margin: 2rem 0;
  padding: 1rem 0;
  &.all-visible{
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

  &.all-visible{
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

  .slide-image {
    border-radius: 100%;
    border: 0.4rem solid #3e5973;
    aspect-ratio: 1/1;
    width: 120px;
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
  top: 50%;
  box-shadow: 0 0 7px rgba(250, 250, 250, 1);
  background-color: transparent;
  background: rgba(250, 250, 250, 0.8);
  height: 100%;
  width: 30%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  font-size: 3em;
  color: #3e5973;
  z-index: 2;

  @media (min-width: 400px) {
    width: 10%;
  }

  ${({ direction }) => (direction === "left" ? "left: 0%;" : "right: 0%;")}
`;
