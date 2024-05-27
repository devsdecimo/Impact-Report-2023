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
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    align-items: center;
  }

  .content-body {
    width: 80vw;
    max-width: 1200px;
  }

  .artist-image {
    width: 70vw;
    @media (min-width: 768px) {
      float: left;
      width: 18vw;
      margin-right: 2rem;
      max-width: 500px;
    }
  }

  .community-image {
    width: 70vw;
    @media (min-width: 768px) {
      float: right;
      width: 18vw;
      max-width: 500px;
    }
  }

  .connections-image {
    width: 70vw;
    @media (min-width: 768px) {
      float: left;
      width: 18vw;
      max-width: 500px;
      margin-right: 2rem;
    }
  }

  .press-image {
    width: 70vw;
    @media (min-width: 768px) {
      float: right;
      width: 18vw;
      max-width: 500px;
    }
    .circle-3 {
      top: 56%;
      left: 88.4%;
    }
    .circle-2 {
      width: 62%;
      top: 40%;
      left: 36.29%;
      background: transparent;
    }
    .circle-1 {
      top: 7%;
      left: 46.47%;
    }
  }

  .screen-image {
    width: 70vw;
    @media (min-width: 768px) {
      float: left;
      width: 18vw;
      max-width: 500px;
      margin-right: 2rem;
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

  @media (max-width: 767px) {
    .artist-image,
    .community-image,
    .press-image,
    .screen-image,
    .connections-image {
      margin: auto;
      margin-bottom: 2rem;
    }
    /*centrar titulos */
    h3 {
      text-align: center;
    }
  }
`;
