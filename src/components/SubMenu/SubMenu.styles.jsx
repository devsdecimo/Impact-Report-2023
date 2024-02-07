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
      content: "▼";
      transition: 0.5s;
      font-size: 0.75rem;
    }
    &.submenu__open {
      &::after {
        transform: rotate(180deg);
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
      padding-top: 0.75rem;
    }

    ul {
      display: flex;
      gap: 1rem;
      list-style: none;
      flex-direction: column;
      flex-direction: column;
      border-bottom: none;
      padding: 0;
      overflow-x: visible;
    }

    li:not(.title) {
      font-size: 1rem;
    }
  }
`;
