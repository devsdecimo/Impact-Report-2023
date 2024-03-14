import styled from "styled-components";

export const PageContainer = styled.div`
  background-image: url("/assets/images/by_the_numbers/Background.webp");
  background-position: center 50%;
  background-size: cover;
  @media (min-width: 768px) {
    background-position: 50% 45vh;
    row-gap: 0;
  }
  .content {
    max-width:80vw;
    margin:auto;
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

    @media (min-width: 768px) {
      width: 60%;
      max-width: 1000px;
    }
  }

  .d-flex{
    display:flex;
    flex-direction:column;
    gap:30px;
    @media (min-width:768px){
        flex-direction:row;
    }
  }
  .italic{
    font-style:italic;
  }


`;
