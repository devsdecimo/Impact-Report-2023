import styled from "styled-components";

export const PageContainer = styled.div`
  background-image: url("/assets/images/by_the_numbers/Background.webp");
  background-position: center 50%;
  background-size: cover;
  @media (min-width: 830px) {
    background-position: 50% 39vh;
    row-gap: 0;
  }
  .content {
    display: grid;
    grid-template-rows: repeat(50, auto);
    padding: 8vw 0;
    @media (min-width: 830px) {
      grid-template-columns: repeat(2, auto);
      row-gap: 0;
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
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 70%;
    text-align: center;

    @media (min-width: 830px) {
      max-width: 60%;
      font-size: 2.02vw;
    }
  }

  .separator {
    background-image: url("/assets/images/separator.svg");
    height: 10px;
    width: 100px;
    background-size: cover;

    @media (min-width: 830px) {
      height: 20px;
      width: 200px;
    }
  }
`;
