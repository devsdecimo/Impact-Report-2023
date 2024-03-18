import React from "react";
import Page from "../../components/Page/Page";
import { PageContainer } from "./NotFound.styles";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <PageContainer>
      <Page
          title={
            <img
              src="/assets/images/not-found/Title.svg"
              alt="Not Found"
            />
          }
        header_image="/assets/images/not-found/Header.webp"
        footer_image="/assets/images/not-found/Footer.webp"
      >
        <div>
          <h2>404 Not Found</h2>
          <h3><Link to="/">Return to Home </Link></h3>
        </div>
      </Page>
    </PageContainer>
  );
}

export default NotFound;
