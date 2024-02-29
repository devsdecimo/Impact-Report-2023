import styled from "styled-components";

export const SectionWithImageContainer = styled.div`
  width: 60vw;
  min-width: 700px;
  margin: auto;
  @media (max-width: 829px) {
    width: 80vw;
    min-width: 80vw;
    margin-bottom: 3rem;
    padding-top: 2rem;
  }

  h2.title {
    display: flex;
    justify-content: center;
    gap: 15px;
    color: #3e5973;
    @media (max-width: 829px) {
      flex-wrap: wrap;
    }
    /*font-size:1.7rem;*/
  }
  .icons-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media (min-width: 829px) {
      width: 80%;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    @media (min-width: 830px) {
      min-width: 360px;
      align-items: start;
    }
  }
`;
