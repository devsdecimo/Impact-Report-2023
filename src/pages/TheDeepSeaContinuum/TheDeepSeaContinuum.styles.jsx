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
    max-width: 1200px;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }

  .content-group {
    margin-bottom: 4rem;
  }
  .continuum-image {
    width: 70vw;
    max-width: 340px;
  }

  @media (min-width: 768px) {
    .continuum-image {
      width: 30vw;
      max-width: 300px;
    }
  }

  @media (min-width: 1400px) {
    .continuum-image {
      width: 20vw;
    }
  }

  @media (min-width: 1620px) {
    .continuum-image {
      width: 16vw;
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
