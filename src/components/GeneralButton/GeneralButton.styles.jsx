import styled from "styled-components";

export const GeneralButtonContainer = styled.div`
    width:auto;
    display:inline-block;
    @media (max-width:500px){
        width:100%;
    }
  a{
    border:3px solid #5D83A2;
    border-radius:15px;
    padding:10px 20px;
    color:#5D83A2;
    display:flex;
    justify-content: space-between;
    align-items:center;
    gap:2rem;
    font-size:1.5rem;
    text-decoration:none;
    @media (max-width:500px){
        justify-content:center;
    }

  }
  img{
    height:30px;
  }
`;