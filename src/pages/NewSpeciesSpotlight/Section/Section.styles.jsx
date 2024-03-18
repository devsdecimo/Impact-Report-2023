import styled from "styled-components";

export const SectionContainer = styled.div`
  width:80vw;
  max-width:1200px;
  margin:auto;
  padding: 2rem 0 3rem 0;

  .images-container{
    flex-basis: 38%;
    @media (max-width:829px){
        order:2;
    }
  }
  .paragraph-container{
    flex:1;
    @media (max-width:829px){
        order:1;
        margin-top: 0;
    }
  }
  .icons-container{
    max-width:500px;
    margin-left: 3rem;
    margin-top: 0;
    @media (max-width:829px){
        width:320px;
        margin:auto;
    }
  }
`;
