import styled from "styled-components";

export const PageContainer = styled.div`
  &:not(.by_the_numbers) {
    background-image: url(/assets/images/BG.webp);
    background-size: 100% auto;
    background-color: white;
  }

  .main_content {
    min-height: 60vh;
    overflow: hidden;
  }
`;
