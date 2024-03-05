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

  .image-container {
    position: relative;
    height: 250px;
    width: 230px;
    margin-left: 20px;
    margin-bottom: 0px;
    margin-top: 2rem;
    /*
        margin-top: 70px;
        transform: scale(1.2);*/
    @media (max-width: 829px) {
      margin: auto;
      transform: scale(1);
    }
  }

  img.pos-absolute {
    position: absolute;
    width: 350px;
    height: auto;
    z-index: 2;
    top: -30px;
    right: -30px;
  }
  .circle1 {
    width: 180px;
    height: 180px;
    background-color: #80aed8;
    opacity: 0.7;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 35px;
  }
  .circle2 {
    width: 120px;
    height: 120px;
    background-color: #80aed8;
    opacity: 0.4;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    top: 100px;
    right: 110px;
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

    @media (min-width: 768px) {
      min-width: 360px;
      align-items: start;
    }
  }
`;
