import styled from "styled-components";

export const NavMenuContainer = styled.nav`
  display: contents;

  .menuButton {
    position: absolute;
    border: none;
    background-color: transparent;
    top: 0;
    right: 0;
    margin: 1rem;
    cursor: pointer;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      position: fixed;
      margin: 3.25rem 4rem;
      transition: 0.5s;
      flex-direction: row-reverse;
      gap: 0.25rem;
    }

    &:hover,
    &:focus {
      @media (min-width: 768px) {
        transform: scale(1.2);
      }
      &:before {
        background-color: #ffffff;
      }
      &::after {
        color: #ffffff;
      }
    }

    &:before {
      content: "";
      display: flex;
      background-color: #ffffff;
      height: 20px;
      width: 20px;
      padding: 0.8rem;
      border-radius: 100%;
      background-image: url("/assets/images/MenuButton.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50% 50%;
      box-shadow: 3px 3px 10px rgba(15, 122, 188, 0.5);
      transition: 0.5s;
      @media (min-width: 768px) {
        height: 25px;
        width: 25px;
        padding: 1rem;
      }
    }

    &::after {
      content: "MENU";
      font-family: "Garamond", Times, serif;
      color: #ffffff;
      text-shadow: 3px 3px 10px rgba(15, 122, 188, 0.5);
      font-weight: 900;
      font-size: 1rem;
      padding: 0.2rem;
      transition: 0.5s;
      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }

    &.menu__open {
      &:before {
        background-image: url("/assets/images/CloseButton.svg");
        background-color: transparent;
        height: 25px;
        width: 25px;
        background-size: 50% auto;
        box-shadow: none;
      }
      &::after {
        content: "";
      }
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

      &.return {
        justify-self: flex-end;
        padding-bottom: 2rem;

        font-size: 1rem;

        @media (min-width: 768px) {
          font-size: 1.2vw;
        }

        &:hover {
          @media (min-width: 768px) {
            font-size: 1.3vw;
          }
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
      list-style: none;
      justify-content: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    & > ul ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      padding: 1rem;
      margin-top: 0;
      text-align: center;
      justify-content: start;
      align-items: center;
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
