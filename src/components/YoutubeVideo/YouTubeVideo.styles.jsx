import styled from "styled-components";

export const YoutubeVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;

  iframe {
    width: 40vw;
    max-width: 768px;
    aspect-ratio: 16 / 9;
    border: none;
    @media (min-width: 1400px) {
      max-width: 45.5vw;
    }
  }
`;
