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

`;
