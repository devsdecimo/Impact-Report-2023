import styled from "styled-components";

export const PageContainer = styled.div`
  background-image: url("/assets/images/by_the_numbers/Background.webp");
  background-position: center 50%;
  background-size: cover;
  @media (min-width: 830px) {
    background-position: 50% 45vh;
    row-gap: 0;
  }
  .content {
    display: grid;
    grid-template-rows: repeat(50, auto);
    padding: 8vw 0;
    line-height: 1;
    @media (min-width: 830px) {
      grid-template-columns: repeat(2, auto);
      row-gap: 0;
    }
  }

  p{
    line-height: 1;
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
