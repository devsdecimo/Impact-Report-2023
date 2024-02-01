import styled from "styled-components";

export const PageContainer = styled.div`
  background-image: url("/assets/images/by_the_numbers/Background.webp");
  background-position: center -29%;
  background-size: 100%;

  .intro-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .intro-text p {
    color: #3e5973;
    font-family: "Adobe Garamond Pro";
    font-size: 2.7rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 70%;
    text-align: center;

    @media (min-width: 830px) {
      max-width: 60%;
    }
  }

  .separator {
    background-image: url('/assets/images/separator.svg');
    height: 20px;
    width: 200px;
    background-size: cover;
  }
`;
