import React from "react";
import Page from "../../components/Page/Page";
import { PageContainer } from "./ExecutiveDirectorsNote.styles";

function ExecutiveDirectorsNote() {
  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/executive_directors_note/Title.svg"
            alt="Executive Directors Note"
          />
        }
        header_image="/assets/images/executive_directors_note/Header.webp"
        footer_image="/assets/images/executive_directors_note/Footer.webp"
      >
      <div className="intro-text">
        <p>
          This was a truly historic and momentous year at Schmidt Ocean<br></br>Institute as we embarked on new adventures of scientific<br></br>discovery with R/V Falkor (too).
        </p>
      </div>
      </Page>
    </PageContainer>
  );
}

export default ExecutiveDirectorsNote;
