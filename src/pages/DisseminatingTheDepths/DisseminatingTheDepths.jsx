import React from "react";
import { PageContainer } from "./DisseminatingTheDepths.styles";
import Page from "../../components/Page/Page";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import { Outlet, useLocation } from "react-router-dom";

function DisseminatingTheDepths({ children }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/disseminating_the_depths/Title.svg"
            alt="Disseminating the Depths"
          />
        }
        header_image="/assets/images/the_deep_sea_continuum/Header.webp"
        footer_image="/assets/images/the_deep_sea_continuum/Footer.webp"
      >
        <div className="content-body">
          <Outlet />
        </div>
        <nav>
          <GeneralButton
            href="artist_at_sea"
            icon="/assets/images/icons/brush.svg"
            text="Artist-at-Sea"
            className={
              isActive("/disseminating_the_depths/artist_at_sea")
                ? "active"
                : ""
            }
          />
          <GeneralButton
            href="community_building"
            icon="/assets/images/icons/expansion.svg"
            text="Community Building"
            className={
              isActive("/disseminating_the_depths/community_building")
                ? "active"
                : ""
            }
          />
          <GeneralButton
            href="divestreams_and_connections"
            icon="/assets/images/icons/screen.svg"
            text="Divestreams & Connections"
            className={
              isActive("/disseminating_the_depths/divestreams_and_connections")
                ? "active"
                : ""
            }
          />
          <GeneralButton
            href="press_and_footage"
            icon="/assets/images/icons/mic.svg"
            text="Press & Footage"
            className={
              isActive("/disseminating_the_depths/press_and_footage")
                ? "active"
                : ""
            }
          />
          <GeneralButton
            href="on_the_big_screen"
            icon="/assets/images/icons/eye.svg"
            text="On the Big Screen"
            className={
              isActive("/disseminating_the_depths/on_the_big_screen")
                ? "active"
                : ""
            }
          />
        </nav>
      </Page>
    </PageContainer>
  );
}

export default DisseminatingTheDepths;
