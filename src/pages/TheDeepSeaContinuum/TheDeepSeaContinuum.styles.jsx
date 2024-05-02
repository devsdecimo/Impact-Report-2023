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
  }

  @media (min-width: 768px) {
    .continuum-image {
      width: 40vw;
      max-width: 500px;
    }
  }

  @media (min-width: 1400px) {
    .continuum-image {
      width: 30vw;
    }
  }

  @media (min-width: 1620px) {
    .continuum-image {
      width: 20vw;
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
