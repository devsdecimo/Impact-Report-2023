import styled from "styled-components";

export const SectionContainer = styled.div`
  width:90vw;
  max-width:1300px;
  margin:auto;
  padding: 80px 0;

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