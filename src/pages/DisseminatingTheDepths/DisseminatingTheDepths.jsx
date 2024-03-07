import React from "react";
import { PageContainer } from "./DisseminatingTheDepths.styles";
import Page from "../../components/Page/Page";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import CarouselNav from "../../components/CarouselNav/CarouselNav";
import { Outlet, useLocation } from "react-router-dom";

function DisseminatingTheDepths() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navSlides = [
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/ShanHuaArtistAtSea.webp",
      href: "/disseminating_the_depths/artist_at_sea",
      text: "Artist-at-Sea",
    },
    {
      img: "/assets/images/disseminating_the_depths/community_building/Community Building  -  Presentation-20231012-CD_Foundation-Galapagos-3.webp",
      href: "/disseminating_the_depths/community_building",
      text: "Community Building",
    },
    {
      img: "/assets/images/disseminating_the_depths/divestreams_and_connections/Divestreams and Connections  -  FKt230812-AndreaShipToShoreGalapagos-20230825-Ingle-1869.webp",
      href: "/disseminating_the_depths/divestreams_and_connections",
      text: "Divestreams & Connections",
    },
    {
      img: "/assets/images/disseminating_the_depths/press_and_footage/Press and Footage  -  FKt230812-RicardoStuartOutreachCall-20230901-Ingle-3776-APPROVED.webp",
      href: "/disseminating_the_depths/press_and_footage",
      text: "Press & Footage",
    },
    {
      img: "/assets/images/disseminating_the_depths/on_the_big_screen/On the Big Screen  -  Deep_Rising-Poster_vertical.webp",
      href: "/disseminating_the_depths/on_the_big_screen",
      text: "On the Big Screen",
    },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/disseminating_the_depths/Title.svg"
            alt="Disseminating the Depths"
          />
        }
        header_image="/assets/images/disseminating_the_depths/Header.webp"
        footer_image="/assets/images/disseminating_the_depths/Footer.webp"
      >
        <div className="content-body">
          <CarouselNav slides={navSlides}/>
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
