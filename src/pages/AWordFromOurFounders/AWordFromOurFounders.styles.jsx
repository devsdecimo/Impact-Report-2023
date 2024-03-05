import styled from "styled-components";

export const PageContainer = styled.div`
  background-position: center 50%;
  background-size: cover;
  @media (min-width: 768px) {
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
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 90%;
    text-align: center;
    font-size: 1.5rem;

    @media (min-width: 768px) {
      max-width: 60%;
    }
  }

  .italic{
    font-style:italic;
  }

  .paragraph{
    width: 80vw;
    max-width: 1300px;
    margin: 2rem auto;
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