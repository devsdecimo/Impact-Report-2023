import React from "react";
import { PageContainer } from "./TheDeepSeaContinuum.styles";
import Page from "../../components/Page/Page";
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import CarouselNav from "../../components/CarouselNav/CarouselNav";
import { Outlet, useLocation } from "react-router-dom";

function TheDeepSeaContinuum() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navSlides =[
    {
      img: "/assets/images/the_deep_sea_continuum/grants/g.webp",
      href: "/the_deep_sea_continuum/grants",
      text: "Grants",
    },
    {
      img: "/assets/images/the_deep_sea_continuum/strategic_partnerships/2023_Oceanic_Volcanism_Workshop_Group_picture_Samuel_J_Mitchell_Bristol_University Burbuja.webp",
      href: "/the_deep_sea_continuum/throught_leadership",
      text: "Throught Leadership",
    },
    {
      img: "/assets/images/the_deep_sea_continuum/strategic_partnerships/2023_Oceanic_Volcanism_Workshop_Group_picture_Samuel_J_Mitchell_Bristol_University Burbuja.webp",
      href: "/the_deep_sea_continuum/strategic_partnerships",
      text: "Strategic Partnerships",
    },
  ]
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
        <CarouselNav slides={navSlides}/>
        <div className="content-body">
          <Outlet />
        </div>
      </Page>
    </PageContainer>
  );
}

export default TheDeepSeaContinuum;
