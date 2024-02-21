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

  .d-flex{
    display:flex;
    flex-direction:column;
    gap:30px;
    @media (min-width:830px){
        flex-direction:row;
    }
  }
  .italic{
    font-style:italic;
  }


`;
