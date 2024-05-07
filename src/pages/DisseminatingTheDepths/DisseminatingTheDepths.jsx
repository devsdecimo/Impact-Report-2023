import React from "react";
import { PageContainer } from "./DisseminatingTheDepths.styles";
import Page from "../../components/Page/Page";
import CarouselNav from "../../components/CarouselNav/CarouselNav";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function DisseminatingTheDepths({
  children,
  header_image,
  footer_image,
  title,
}) {
  const navSlides = [
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/HEADER-FKt230602-ArtistAtSeaShowcase-20230613-Ingle-0767.webp",
      href: "/disseminating_the_depths/artist_at_sea",
      text: "Artist-at-Sea",
    },
    {
      img: "/assets/images/disseminating_the_depths/community_building/HEADER - FKt230629-Rodriguez_Sievert_Bacteria-20230719-Naranjo-04143.webp",
      href: "/disseminating_the_depths/community_building",
      text: "Community Building",
    },
    {
      img: "/assets/images/disseminating_the_depths/divestreams_and_connections/HEADER - FKt230417-JoseSpanishHourDiveStream-20230428-Ingle-8396.webp",
      href: "/disseminating_the_depths/divestreams_and_connections",
      text: "Divestreams & Connections",
    },
    {
      img: "/assets/images/disseminating_the_depths/press_and_footage/HEADER - CBSmornings-Panama-20230911-5108.webp",
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
        title={title}
        header_image={header_image}
        footer_image={footer_image}
      >
        <div className="content-body">{children}</div>
        <ScrollToTop />
        <CarouselNav slides={navSlides} />
      </Page>
    </PageContainer>
  );
}

export default DisseminatingTheDepths;
