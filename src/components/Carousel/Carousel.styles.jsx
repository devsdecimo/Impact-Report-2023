import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 25em;
`;

export const Slide = styled.div`
  min-width: 33.333%;
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.5;
  &.center {
    z-index: 2;
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  &.prev,
  &.next {
    z-index: 1;
    opacity: 0.5;
    transform: translateX(calc(-50% + 33.333%)) scale(0.8);
  }
  &.prev {
    transform: translateX(calc(-50% - 33.333%)) scale(0.8);
  }
  img {
    width: 100%;
    display: block;
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
  background: ${(props) => (props.active ? 'black' : 'white')};
  &:last-child {
    margin-right: 0;
  }
`;
