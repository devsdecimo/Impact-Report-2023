import styled from "styled-components";

export const SectionBrandsContainer = styled.div`
  width: 100vw;
  background-color: var(--white);
  padding: 20px 0;
  margin-top: 2rem;

  .brands-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    margin: auto;
    gap: 2rem;
    flex-wrap: wrap;
  }

  img {
    max-width: 55%;
    @media (min-width: 1100px) {
      max-width: unset;
      max-height: 2.7vw;
    }
    @media (min-width: 1190px) {
      max-height: 3vw;
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
