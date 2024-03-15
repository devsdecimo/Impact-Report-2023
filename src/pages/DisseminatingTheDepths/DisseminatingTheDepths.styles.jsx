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
    max-width: 70vw;
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
`;
