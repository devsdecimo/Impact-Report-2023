import styled from "styled-components";

export const ParagraphContainer = styled.div`
  
  h2{
    color:#395169;
    font-style:italic;
    margin-bottom:0;
    @media (max-width:829px){
        text-align:center;
    }
  }
  h3{
    margin-top:10px;
    @media (max-width:829px){
        text-align:center;
        display:block;
    }
  }
  p.text{
    margin-bottom:3rem;
  }
  p.dato{
    margin:1rem 0;
  }

`;