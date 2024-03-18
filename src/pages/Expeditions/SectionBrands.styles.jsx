import styled from "styled-components";

export const SectionBrandsContainer = styled.div`
  width: 100vw;
  background-color: var(--white);
  padding: 20px 0;
  margin-top: 2rem;
  margin-bottom: 2rem;

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

/* 
    object-fit: contain;
    max-width: unset;
    max-height: unset;
    height: 100%;*/ //ajustes precarrusel

  }

  /* a{
    //vertical
    aspect-ratio: 1 / 1;
    // horizontal 
    aspect-ratio: 2 / 1;
    object-fit: contain;
    width: unset;
    height: 100px;
    object-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

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
