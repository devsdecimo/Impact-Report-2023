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
    max-width: 76vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }

  .grants_image {
    width: 70vw;
    float: left;
  }

  .throught_image {
    width: 70vw;
    float: right;
  }

  .strategic_image {
    width: 70vw;
    float: left;
  }

  @media (min-width: 768px) {
    .grants_image {
      width: 25vw;
    }

    .throught_image {
      width: 25vw;
    }

    .strategic_image {
      width: 25vw;
    }
  }

  .content-body {
    margin-top: 6rem;
  }
`;
