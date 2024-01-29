import styled from "styled-components";

export const NavMenuContainer = styled.nav`
  display: contents;

  .menuButton {
    position: absolute;
    background-color: transparent;
    border: none;
    background-image: url("/assets/images/MenuButton.svg");
    height: 40px;
    width: 44px;
    padding: 1rem;
    top: 0;
    right: 0;
    margin: 4rem;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.5s;
    cursor: pointer;
    z-index: 4;

    &:hover,
    &:focus {
      transform: scale(1.2);
    }

    &.menu__open {
      background-image: url("/assets/images/CloseButton.svg");
    }
  }

  .menu {
    position: fixed;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0;
    transition: 1s;
    background: var(--white);
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    &.menu__open {
      width: 100vw;

      li a {
        opacity: 1;
      }
    }
    z-index: 3;

    & > ul {
      list-style: none;
      padding: 2rem;
      padding-top: 10rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
      min-height: 100%;
      width: 80vh;
      background-color: rgba(255, 255, 255, 0.7);
      margin-top: 0;

      @media (min-width: 768px) {
        width: 50vh;
      }

      li {
        font-size: 2.25rem;
        transition: 0.7s;

        a {
          text-decoration: none;
          cursor: pointer;
          color: var(--dark-blue);
          opacity: 0;
          transition: 0.75s;
        }

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
