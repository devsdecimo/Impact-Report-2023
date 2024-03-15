import styled from "styled-components";

export const PageContainer = styled.div`
  background-position: center 50%;
  background-size: cover;
  @media (min-width: 768px) {
    background-position: 50% 45vh;
    row-gap: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    @media (min-width: 768px) {
      display: block;
    }
  }

  .d-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  .italic {
    font-style: italic;
  }

  .CTA {
    @media (min-width: 768px) {
      align-items: center !important;
    }
  }

  .content {
    width: 90vw;
    max-width: 1300px;
    margin-top: 0;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 768px) {
      width: 80vw;
      margin: 2rem auto;
    }
  }
  .content ul {
    padding-left: 1em;
  }

  .content h3 {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }

  .img-column {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .expedition-carousel {
    width: 80vw;
    max-width: 1300px;
    margin: 0 auto;
    @media (max-width: 829px) {
      width: 90vw;
    }
    @media (min-width: 768px) {
      margin-top: 2em;
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    row-gap: 1.5rem;
    margin: 5rem auto;
    width: 70vw;
    max-width: 880px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    flex-direction: row;

    @media (min-width: 870px) {
      flex-direction: row;
      width: 80vw;
    }

    @media (min-width: 768px) {
    }
  }

  li::marker {
    font-size: 1.2;
  }

  .expedition-bubble-image {
    width: 30vh;
    @media (min-width: 768px) {
      float: left;
      min-width: 40vh;
    }
  }

  .columna {
    div {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
`;
