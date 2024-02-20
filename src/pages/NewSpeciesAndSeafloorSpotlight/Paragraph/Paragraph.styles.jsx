import styled from "styled-components";

export const ParagraphContainer = styled.div`
  
  h2, h3, p{
    font-size:1.7rem;
  }
  h2{
    color:#395169;
    font-size:1.7rem;
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
    }
  }
  p{
    line-height: 3rem;
  }
  p.text{
    margin-bottom:3rem;
  }
  .ml-10{
    margin-left:5px;
  }

`;