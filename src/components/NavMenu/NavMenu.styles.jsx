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
    transition: 1s;
    background: var(--white);
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    min-height: 100vh;
    opacity: 0;
    font-size: 1.5rem;
    z-index: 3;
    min-height: 100%;
    overflow: hidden;
    padding-top: 2rem;

    flex-direction: column;
    align-items: center;

    &.menu__open {
      width: 100vw;
      opacity: 1;

      li a {
        opacity: 1;
      }
    }

    img.menu_logo {
      height: 80px;
      width: auto;
    }


    li {
      transition: 0.7s;

      a {
        cursor: pointer;
        color: var(--dark-blue);
        transition: 0.75s;
        text-decoration: none;
      }

      &:hover {
        transform: scale(1.1);
      }
    }

    & > ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      padding: 2rem;
      margin-top: 0;
      text-align: center;
      gap: 0.75rem;
      margin: 0;
      padding-bottom: 4rem;

      .submenu {
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          flex-direction: column;
          flex-direction: column;
          border-bottom: none;

          li:not(.title) {
            font-size: 1rem;
          }
        }

        &:hover {
          transform: none;
        }
      }
    }
  }
`;
