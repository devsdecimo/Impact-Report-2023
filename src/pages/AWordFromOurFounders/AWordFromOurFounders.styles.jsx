import styled from "styled-components";

export const PageContainer = styled.div`
  background-position: center 50%;
  background-size: cover;
  @media (min-width: 768px) {
    background-position: 50% 45vh;
    row-gap: 0;
  }
  .content {
    width: 80vw;
    margin: 0 auto;
    max-width: 1200px;
    word-spacing: normal;
    letter-spacing: normal;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      /* display: grid; */
      /* grid-template-areas: "img1 p1 p1" "img1 p2 img2" "p3 p3 p3" "p4 p4 p4"; */
      /* grid-template-columns: 25% 37.5% 37.5%; */
      /* grid-template-rows: repeat(3, auto); */
    display: block;

    }
    @media (min-width: 1400px) {
      /* grid-template-areas: "img1 p1 p1" "p2 p2 img2" "p3 p3 p3" "p4 p4 p4"; */
    }
  }

  .content p {
    width: 100%;
  }

  .content {
    :nth-child(1) {
      grid-area: img1;
    }
    :nth-child(2) {
      grid-area: p1;
    }

    :nth-child(3) {
      grid-area: img2;
    }

    :nth-child(4) {
      grid-area: p2;
    }

    :nth-child(5) {
      grid-area: p3;
    }
    :nth-child(6) {
      grid-area: p4;
    }
  }

  .intro-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .intro-text p {
    color: #3e5973;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 90%;
    text-align: center;
    font-size: 1.5rem;

    @media (min-width: 830px) {
      width: 60%;
      max-width: 1000px;
    }
  }

  .italic {
    font-style: italic;
  }

  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  }

  .img-column {
    display: flex;
    flex-direction: column;
    column-gap: 1rem;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
