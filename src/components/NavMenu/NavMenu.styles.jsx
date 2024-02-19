import styled from "styled-components";

export const NavMenuContainer = styled.nav`
  display: contents;

  .menuButton {
    position: absolute;
    background-color: transparent;
    border: none;
    background-image: url("/assets/images/MenuButton.svg");
    height: 25px;
    width: 25px;
    padding: 1rem;
    top: 0;
    right: 0;
    margin: 2rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition: 0.5s;
    cursor: pointer;
    z-index: 4;

    &:hover,
    &:focus {
      transform: scale(1.2);
    }

    &.menu__open {
      background-image: url("/assets/images/CloseButton.svg");
      position: fixed;
    }

    @media (min-width: 830px) {
      margin: 4rem;
    }
  }

  .menu {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0;
    transition: 0.3s;
    transition-timing-function: linear;
    background: var(--white);
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    min-height: 100vh;
    opacity: 0;
    font-size: 1.3rem;
    line-height: 1.7;
    z-index: 3;
    min-height: 100%;
    overflow: hidden;
    padding: 1rem;

    @media (min-width: 830px) {
      transition: 1s;
      font-size: 2rem;
      gap: 1rem;
    }

    flex-direction: column;
    align-items: center;

    img.menu_logo {
      height: 80px;
      width: auto;

      @media (min-width: 830px) {
        height: 120px;
      }
    }

    li {
      opacity: 0;
      transition: 0.3s;

      a {
        cursor: pointer;
        color: var(--dark-blue);
        text-decoration: none;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    &.menu__open {
      width: calc(100vw - 2rem);
      opacity: 1;

      li {
        opacity: 1;
        transition: 2s;
      }
    }

    & > ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      padding: 1rem;
      margin-top: 0;
      text-align: center;
      gap: 1.5rem;
      margin: 0;
      padding-bottom: 4rem;

      .submenu {
        &:hover {
          transform: none;
        }
      }
    }
  }
`;
