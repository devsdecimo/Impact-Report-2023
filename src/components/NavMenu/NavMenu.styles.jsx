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
    cursor: pointer;
    z-index: 4;
    @media (min-width: 768px) {
      transition: 0.5s;
    }
    &:hover,
    &:focus {
      @media (min-width: 768px) {
        transform: scale(1.2);
      }
    }

    &.menu__open {
      background-image: url("/assets/images/CloseButton.svg");
      position: fixed;
      height: 25px;
      width: 25px;
    }

    @media (min-width: 768px) {
      margin: 4rem;
    }
  }

  .menu {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -10%;
    width: 0;
    transition: 0.3s;
    transition-timing-function: linear;
    background: var(--white);
    overflow: hidden;
    display: flex;
    min-height: 100vh;
    opacity: 0;
    z-index: 3;
    min-height: 100%;
    overflow: auto;
    padding: 1rem;

    @media (min-width: 768px) {
      transition: 1s;
      gap: 1rem;
    }

    @media (min-width: 1800) {
      font-size: 1.375vw;
    }

    flex-direction: column;
    align-items: center;

    img.menu_logo {
      height: 80px;
      width: auto;

      @media (min-width: 768px) {
        height: 7rem;
      }
    }

    li {
      opacity: 0;
      transition: 0.3s;
      line-height: 1.5;

      a {
        cursor: pointer;
        color: var(--dark-blue);
        text-decoration: none;
        line-height: 1.6;
      }
      @media (min-width: 768px) {
        font-size: 1.5vw;
      }
      &:hover {
        @media (min-width: 768px) {
          font-size: 1.6vw;
          transition: 1s;
        }
      }
    }

    &.menu__open {
      width: calc(100vw - 2rem);
      opacity: 1;
      right: 0;

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
