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

  .d-flex{
    display:flex;
    flex-direction:column;
    justify-content: center;
    gap:30px;
    @media (min-width:830px){
        flex-direction:row;
    }
  }
  .italic{
    font-style:italic;
  }

  .CTA{
    align-items:center !important;
  }

  .paragraph{
    width:80vw;
    max-width:1300px;
    margin:2rem auto;
    font-size:1.5rem;
    line-height: 3rem;
    @media (max-width:829px){
        width:90vw;
    }
  }
  .paragraph p{
    margin-bottom:3rem;
  }
  .btn-container{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:3rem;
    margin:5rem auto;
    max-width:90vw;
    @media (max-width:500px){
        flex-direction:column;
    }
  }

`;
