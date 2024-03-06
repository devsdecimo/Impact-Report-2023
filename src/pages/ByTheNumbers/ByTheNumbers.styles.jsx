import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: "Garamond", Times, serif;
  background-position: center 50%;
  background-size: cover;
  @media (min-width: 768px) {
    background-position: 50% 45vh;
    row-gap: 0;
  }
  .content {
    display: grid;
    grid-template-rows: repeat(16, auto);
    line-height: 1;
    @media (min-width: 768px) {
    grid-template-rows: repeat(16, 1fr);
      grid-template-columns: repeat(2, auto);
      row-gap: 0;
    }
  }

  p{
    line-height: 1;
  }
`;
