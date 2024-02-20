import React from "react";
import { PageContainer } from "./TheDeepSeaContinuum.styles";
import Page from "../../components/Page/Page";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import { Outlet } from "react-router-dom";

function TheDeepSeaContinuum({ children }) {
  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/the_deep_sea_continuum/Title.svg"
            alt="By the Numbers"
          />
        }
        header_image="/assets/images/the_deep_sea_continuum/Header.webp"
        footer_image="/assets/images/the_deep_sea_continuum/Footer.webp"
      >
        <nav>
          <GeneralButton
            icon="/assets/images/icons/lightning.svg"
            text="Grants"
          />
          <GeneralButton
            icon="/assets/images/icons/bulb.svg"
            text="Throught Leadership"
          />
          <GeneralButton
            icon="/assets/images/icons/ghandshake.svg"
            text="Strategic Partnerships"
          />
        </nav>
        <Outlet />
      </Page>
    </PageContainer>
  );
}

export default TheDeepSeaContinuum;
