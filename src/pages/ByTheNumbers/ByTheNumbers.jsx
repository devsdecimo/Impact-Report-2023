import React from "react";
import { PageContainer } from "./ByTheNumbers.styles";
import Page from "../../components/Page/Page";

function ByTheNumbers() {
  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/by_the_numbers/Title.svg"
            alt="By the Numbers"
          />
        }
        header_image="/assets/images/by_the_numbers/Header.webp"
        footer_image="/assets/images/by_the_numbers/Footer.webp"
      >
        <h2>Content</h2>
      </Page>
    </PageContainer>
  );
}

export default ByTheNumbers;
