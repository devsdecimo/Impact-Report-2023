import styled from "styled-components";

export const PageContainer = styled.div`
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 4rem;
    row-gap: 2rem;
    flex-wrap: wrap;
  }

  .main_content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    align-items: center;
  }

  .content-group {
    margin-bottom: 4rem;
    max-width: 1200px;
    width: 80vw;
  }
  .continuum-image {
    width: 70vw;
    max-width: 340px;

    &.grants-1-image{
      
      @media (min-width: 768px) {
        margin-top: -5rem;
      }
    }
  }

  @media (min-width: 768px) {
    .continuum-image {
      width: 40vw;
      max-width: 330px;
    }
  }

  @media (min-width: 1280) {
    .continuum-image {
      width: 30vw;
      max-width: 300px;
    }
  }

  @media (min-width: 1400px) {
    .continuum-image {
      width: 30vw;
      max-width: 330px;
    }
  }

  @media (min-width: 1620px) {
    .continuum-image {
      max-width: 360px;
    }
  }
  /*centrar bubbles en mobile*/
  @media (max-width: 767px) {
    .continuum-image {
      margin:auto;
      margin-bottom:3rem;
    }
    /*centrar titulos */
    h3{
      text-align: center;
    }
  }

`;
