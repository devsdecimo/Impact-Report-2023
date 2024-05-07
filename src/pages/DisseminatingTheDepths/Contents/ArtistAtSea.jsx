import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import Carousel from "../../../components/Carousel/Carousel";
import DisseminatingTheDepths from "../DisseminatingTheDepths";

function ArtistAtSea() {
  const slides = [
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/01-Showcase.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/02-Michael.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/03-Max.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/04-Max2.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/05-Shan.webp",
    },
  ];

  return (
    <DisseminatingTheDepths
      title={
        <img
          src="/assets/images/disseminating_the_depths/artist-at-sea/Title.svg"
          alt="Artist-at-Sea"
        />
      }
      header_image="/assets/images/disseminating_the_depths/artist-at-sea//Header.webp"
      footer_image="/assets/images/disseminating_the_depths/artist-at-sea/Footer.webp"
    >
      <p>
        <BubbleImage
          image="/assets/images/disseminating_the_depths/artist-at-sea/ShanHuaArtistAtSea.webp"
          className="artist-image"
          direction="up"
        />
        The{" "}
        <a href="https://schmidtocean.org/apply/artist-residency-program/" target="_blank" rel="noopener noreferrer">
          <u>Artist-at-Sea program</u>
        </a>{" "}
        exhibited in three U.S. locations and welcomed seven artists on
        expeditions in 2023, including artists from the regions where{" "}
        <em>Falkor (too) </em>was operating. We also worked with internationally
        recognized artist Max Hooper Schneider, who hosted a live ship tour and
        presentation of his work for audiences at the Los Angeles Museum of
        Contemporary Art in the U.S.
      </p>
      <p>
        Twenty pieces from the{" "}
        <a href="https://schmidtocean.org/collection/artist-at-sea/" target="_blank" rel="noopener noreferrer">
          <u>Artist-at-Sea collection</u>
        </a>{" "}
        were displayed at the Port of Seattle in Washington for six months. The
        exhibition ended with a special event in April that included a video
        presentation and remarks from Dr. David Butterfield, senior research
        scientist for NOAA Pacific Marine Environmental Laboratory, who had just
        completed <em>Falkor (too)&rsquo;s </em>inaugural expedition as chief
        scientist. In May, we showcased 13 prints from the Artist-at-Sea
        collection and deep-sea images from previous expeditions at the Newport
        Race Village during The Ocean Race stopover in Rhode Island, U.S.
      </p>
      <p>
        Schmidt Ocean Institute concluded the year by participating, for the
        first time, in{" "}
        <a href="https://schmidtocean.org/soi-partners-ocean-programme-art-basel-miami/" target="_blank" rel="noopener noreferrer">
          <u>Art Basel Miami Beach</u>
        </a>{" "}
        in collaboration with{" "}
        <a href="https://nautil.us/" target="_blank" rel="noopener noreferrer">
          <u>Nautilus Magazine</u>
        </a>
        . Founded in 1970, Art Basel is one of the world&rsquo;s largest art
        exhibitions. More than{" "}
        <a href="https://schmidtocean.org/collection/artist-at-sea/" target="_blank" rel="noopener noreferrer">
          <u>40 works of art</u>
        </a>{" "}
        were on display alongside several ocean-focused events at the Miami
        Convention Center and the Phillip and Patricia Frost Museum of Science.
        A series of public events included a panel discussion with{" "}
        <a href="https://schmidtocean.org/apply/artist-residency-program/" target="_blank" rel="noopener noreferrer">
          <u>Artist-at-Sea</u>
        </a>{" "}
        participants Rebecca Rutstein, Carol Mickett and Robert Stackhouse,
        Lizzy Taber, Michel Droge, and guests Runa Ray and Jane McCarthy, who
        represented Taiji Terasaki Studios. A film night featured SOI&rsquo;s
        award-winning films &ldquo;{" "}
        <a href="https://www.youtube.com/watch?v=OB8IjCJQMoE" target="_blank" rel="noopener noreferrer">
          <u>Climate Under Pressure</u>
        </a>{" "}
        &rdquo; and &ldquo;
        <a href="https://www.youtube.com/watch?v=thYkeWuyVwE" target="_blank" rel="noopener noreferrer">
          <u>The Art of Exploration</u>
        </a>
        ,&rdquo; and a live connection to research vessel <em>Falkor (too)</em>{" "}
        enriched the evening. Visitors also received hard copies of Nautilus
        Magazine's Special Ocean Issue.
      </p>
      <Carousel slides={slides} className="artist-sea-carousel" />
    </DisseminatingTheDepths>
  );
}

export default ArtistAtSea;
