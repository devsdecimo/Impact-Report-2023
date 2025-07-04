import styled from "styled-components";

export const MapIframeContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;

  @media (max-width: 829px) {
    margin: 2rem 0;
  }

  iframe {
    width: 70vw;
    max-width: 768px;
    aspect-ratio: 16 / 9;
    border: none;
    @media (min-width: 768px) {
      width: 40vw;
    }
  }
`;
