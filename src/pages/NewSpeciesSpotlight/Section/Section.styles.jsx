import styled from "styled-components";

export const SectionContainer = styled.div`
  max-width:1200px;
  margin:auto;
  padding: 2rem 0 6rem 0;

  .images-container{
    flex-basis: 45%;
    @media (max-width:829px){
        order:2;
    }
  }
  .paragraph-container{
    flex:1;
    @media (max-width:829px){
        order:1;
    }
  }
  .icons-container{
    max-width:500px;
    @media (max-width:829px){
        width:320px;
        margin:auto;
    }
  }
`;