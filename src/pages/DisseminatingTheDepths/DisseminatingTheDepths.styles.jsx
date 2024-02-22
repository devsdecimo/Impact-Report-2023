import styled from "styled-components";

export const PageContainer = styled.div`
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 4rem;
    row-gap: 2rem;
    flex-wrap: wrap;
  }

  .main_content {
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }

  .disseminating-image{
    width: 45vh;
    float: left;
  }

  .content-body{
    margin-top: 6rem;
  }

  .hide {
    opacity: 0;
    transform: scale(0);
    max-width: 0;
    transition: 1s;
  }

  .unhide{
    opacity: 1;
    transform: scale(1);
    max-width: 50vw;
    transition: 1s;
  }
  

`;
