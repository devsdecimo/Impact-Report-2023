import styled from "styled-components";

export const SubMenuContainer = styled.div`
  .submenu_title {
    background: none;
    color: var(--dark-blue);
    text-decoration: none;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    transition: 0.7s;
    &:hover {
      transform: scale(1.1);
    }
    &::after {
      content: "";
      height: 0.6rem;
      width: 0.6rem;
      border-bottom: 2px solid var(--dark-blue);
      border-left: 2px solid var(--dark-blue);
      transform: rotate(-45deg);
      transition: 0.5s;
    }
    &.submenu__open {
      &::after {
        transform: rotate(135deg);
      }
    }
  }
  .contents {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: 1s;

    &.submenu__open {
      max-height: 100vh;
      opacity: 1;
      padding-top: 2rem;
    }

    ul{
        padding: 0;
        overflow-x: visible;
    }
  }
`;
