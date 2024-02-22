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
    
  }

  .intro-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .intro-text p {
    color: #3e5973;
    /*font-size: 1.7rem;*/
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

  .italic{
    font-style:italic;
  }

  .paragraph{
    width: 80vw;
    max-width: 1300px;
    margin: 2rem auto;
    font-size: 1.7rem;
    line-height: 3rem;
    @media (max-width:829px){
        width:90vw;
    }
  }

  .paragraph p{
    margin-bottom:4rem;
  }

  .btn-container{
    display:flex;
    align-items: center;
    justify-content: center;
    margin:3rem 0;
  }


`;