import styled from "styled-components";

export const NavMenuContainer = styled.nav`
  display: contents;
  
  .menuButton{
    position: absolute;
    background-color: transparent;
    border: none;
    background-image: url('/src/assets/images/MenuButton.svg');
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

    &:hover, &:focus{
        transform: scale(1.2);
    }
  }

  .menu{
    position: fixed;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    width: 0;
    transition: 1s;
    background: var(--white);
    overflow: hidden;
    &.menu__open{
        width: 100vw;
    }
    z-index: 3;
  }
  

`;
