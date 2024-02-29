import styled from "styled-components";

export const GeneralButtonContainer = styled.div`
  width: auto;
  display: inline-block;
  @media (max-width: 500px) {
    width: 95%;
    margin: 0 2.5%;
  }
  a {
    background: transparent;
    border: 3px solid #5d83a2;
    border-radius: 15px;
    padding: 0.5rem 1.5rem;
    color: #5d83a2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 500px) {
      justify-content: center;
    }
    transition: 1s;
  }
  img {
    height: 30px;
  }

  &.active {
    a {
      background-color: #5d83a2;
      color: #ffffff;
      border-color: #ffffff;
    }
    img{
      filter: contrast(100) invert();
    }
  }
`;
