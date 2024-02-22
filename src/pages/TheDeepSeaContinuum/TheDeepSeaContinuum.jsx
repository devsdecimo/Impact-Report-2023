import React from "react";
import { PageContainer } from "./TheDeepSeaContinuum.styles";
import Page from "../../components/Page/Page";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import { Outlet, useLocation } from "react-router-dom";

function TheDeepSeaContinuum({ children }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
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
            href="grants"
            icon="/assets/images/icons/lightning.svg"
            text="Grants"
            className={
              isActive("/the_deep_sea_continuum/grants") ? "active" : ""
            }
          />
          <GeneralButton
            href="thought_leadership"
            icon="/assets/images/icons/bulb.svg"
            text="Throught Leadership"
            className={
              isActive("/the_deep_sea_continuum/thought_leadership")
                ? "active"
                : ""
            }
          />
          <GeneralButton
            href="strategic_partnerships"
            icon="/assets/images/icons/handshake.svg"
            text="Strategic Partnerships"
            className={
              isActive("/the_deep_sea_continuum/strategic_partnerships")
                ? "active"
                : ""
            }
          />
        </nav>
        <div className="content-body">
          <Outlet />
        </div>
      </Page>
    </PageContainer>
  );
}

export default TheDeepSeaContinuum;
