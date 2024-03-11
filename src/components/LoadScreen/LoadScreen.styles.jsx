import styled from "styled-components";

export const LoadContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: rgb(47, 116, 160);
  background: radial-gradient(
    circle,
    rgba(47, 116, 160, 1) 0%,
    rgba(47, 116, 160, 1) 20%,
    rgba(47, 78, 114, 1) 60%
  );

  img {
    width: 50vw;
    @media (min-width: 768px) {
      width: 16vw;
    }
  }



  /* HTML: <div class="loader"></div> */
  .loader {
    width: 30vw;
    @media (min-width: 768px) {
      width: 12vw;
    }
    aspect-ratio: 6;
    --c: #0000 64%, #fff 66% 98%, #0000 101%;
    background: radial-gradient(35% 146% at 50% 159%, var(--c)) 0 0,
      radial-gradient(35% 146% at 50% -59%, var(--c)) 25% 100%;
    background-size: calc(100% / 3) 50%;
    background-repeat: repeat-x;
    animation: l1 1s infinite linear;
  }
  @keyframes l1 {
    to {
      background-position: 50% 0, 75% 100%;
    }
  }
`;
