import React from "react";
import { PageContainer } from "./TheDeepSeaContinuum.styles";
import Page from "../../components/Page/Page";
import CarouselNav from "../../components/CarouselNav/CarouselNav";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function TheDeepSeaContinuum({
  children,
  header_image,
  footer_image,
  title,
}) {
  const navSlides = [
    {
      img: "/assets/images/the_deep_sea_continuum/grants/g.webp",
      href: "/the_deep_sea_continuum/grants",
      text: "Grants",
    },
    {
      img: "/assets/images/the_deep_sea_continuum/service/NavSlide.webp",
      href: "/the_deep_sea_continuum/service",
      text: "Service",
    },
    {
      img: "/assets/images/the_deep_sea_continuum/conference/Conference, Meetings, and Workshops.webp",
      href: "/the_deep_sea_continuum/conference_meetings_and_workshops",
      text: "Conference Meetings and Workshops",
    },
    {
      img: "/assets/images/the_deep_sea_continuum/strategic_partnerships/All-Atlantic.webp",
      href: "/the_deep_sea_continuum/strategic_partnerships",
      text: "Strategic Partnerships",
    },
  ];

  return (
    <PageContainer>
      <Page
        title={title}
        header_image={header_image}
        footer_image={footer_image}
      >
        <div className="content-body">{children}</div>
        <CarouselNav slides={navSlides} />
      </Page>
    </PageContainer>
  );
}

export default TheDeepSeaContinuum;
