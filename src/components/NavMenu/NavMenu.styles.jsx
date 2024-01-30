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
    margin: 2rem;
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

    @media (min-width: 768px) {
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
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    min-height: 100vh;
    &.menu__open {
      width: 100vw;

      li a {
        opacity: 1;
      }
    }
    z-index: 3;

    .menu_contents {
      background-color: rgba(255, 255, 255, 0.7);
      padding-top: 2rem;
      width: 70vw;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.5rem;
      overflow: auto;

      img.menu_logo {
        height: 8rem;
        width: auto;
      }

      @media (min-width: 768px) {
        width: 35vw;
        font-size: 2.25rem;
      }

      li {
        transition: 0.7s;

        a {
          text-decoration: none;
          cursor: pointer;
          color: var(--dark-blue);
          transition: 0.75s;
          text-decoration: underline dotted;
          text-underline-offset: 6px;
        }

        &:hover {
          transform: scale(1.2);
        }
      }

      & > ul {
        display: flex;
        list-style: none;
        flex-direction: column;
        padding: 2rem;
        margin-top: 0;
        text-align: center;
        gap: 2.25rem;
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

              @media (min-width: 768px) {
                font-size: 1.5rem;
              }
            }
          }

          &:hover {
            transform: none;
          }
        }
      }
    }
  }
`;
