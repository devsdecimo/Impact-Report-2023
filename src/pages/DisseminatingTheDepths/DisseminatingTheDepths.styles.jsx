import styled from "styled-components";

export const PageContainer = styled.div`
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 4rem;
    row-gap: 2rem;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .main_content {
    width: 80vw;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }

  .artist-image {
    width: 30vh;
    @media (min-width: 768px) {
      float: left;
      min-width: 45vh;
      margin-right:2rem;
    }
  }

  .community-image {
    width: 30vh;
    @media (min-width: 768px) {
      float: right;
      min-width: 45vh;
    }
  }

  .connections-image {
    width: 30vh;
    @media (min-width: 768px) {
      float: left;
      min-width: 45vh;
      margin-right:2rem;
    }
  }

  .press-image {
    width: 30vh;
    @media (min-width: 768px) {
      float: right;
      min-width: 45vh;
    }
  }

  .screen-image {
    width: 30vh;
    @media (min-width: 768px) {
      float: left;
      min-width: 45vh;
      margin-right:2rem;
    }
  }

  .hide {
    opacity: 0;
    transform: scale(0);
    max-width: 0;
    transition: 1s;
  }

  .unhide {
    opacity: 1;
    transform: scale(1);
    max-width: 50vw;
    transition: 1s;
  }

  .artist-sea-carousel {
    margin: 2rem 0;
  }
  
  @media (max-width:767px){
    .artist-image, .community-image, .press-image, .screen-image, .connections-image{
      margin:auto;
      margin-bottom:2rem;
    }
    /*centrar titulos */
    h3{
      text-align: center;
    }
  }
`;
