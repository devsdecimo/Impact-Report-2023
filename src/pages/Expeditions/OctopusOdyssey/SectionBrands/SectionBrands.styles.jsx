import styled from "styled-components";

export const SectionBrandsContainer = styled.div`
  width: 100vw;
  background-color: white;
  padding: 20px 0;
  margin-top: 2rem;

  .brands-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    max-width: 1400px;
    margin: auto;
    gap: 4rem;
  }

  img {
    max-height: 200px;
    @media (min-width: 1100px) {
      max-width: 120px;
      max-height: 4.5vw;
      width: 100%;
    }
  }

  .only-mobile {
    @media (min-width: 1100px) {
      display: none;
    }
  }
  .only-desktop {
    @media (max-width: 1099px) {
      display: none;
    }
  }
`;
