import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import Carousel from "../../../components/Carousel/Carousel";
import DisseminatingTheDepths from "../DisseminatingTheDepths";

function ArtistAtSea() {
  /* CAROUSEL OLD:
  const slides = [
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/Artists_Lab.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/FalkorToo-Pei-Wen.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/MaxHooperSchneiderTestsArtInstallation.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/PeiWenFashionSketches.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/scitoo-max1Recover1.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/artist-at-sea/carousel/Shan-DigitalArtist.webp",
    },
  ];*/
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
        <h3>Artist-at-Sea</h3> The{" "}
        <a href="https://schmidtocean.org/apply/artist-residency-program/" target="_blank">
          Artist-at-Sea program
        </a>{" "}
        exhibited in three U.S.-based locations and welcomed seven artists on
        expeditions in 2023. SOI was thrilled to include artists from the
        regions to where <em>Falkor (too)</em> was operating, as well as
        internationally recognized artists such as Max Hooper Schneider, who
        hosted a live ship tour and presentation of his work for audiences at
        the Los Angeles Museum of Contemporary Art.
      </p>
      <p>
        Twenty pieces from the{" "}
        <a href="https://schmidtocean.org/collection/artist-at-sea/" target="_blank">
          Artist-at-Sea collection
        </a>{" "}
        were displayed at the Port of Seattle in Washington for six months. The
        exhibition came to a close with a special event in April that included a
        video presentation and remarks from Dr. David Butterfield, who had just
        completed <em>Falkor (too)&rsquo;s</em> inaugural science expedition as
        chief scientist. In May, 13 prints of Artist-at-Sea work and deep sea
        images from previous expeditions were showcased at the Newport Race
        Village during The Ocean Race stopover in Rhode Island, U.S.
      </p>
      <p>
        SOI concluded the year by participating in{" "}
        <a href="https://schmidtocean.org/soi-partners-ocean-programme-art-basel-miami/" target="_blank">
          Art Basel Miami Beach
        </a>{" "}
        for the first time, working in collaboration with Nautilus Magazine.
        Founded in 1970, Art Basel is one of the world&rsquo;s largest art
        exhibitions with fairs in Basel, Hong Kong, Paris, and Miami Beach. New
        works from Artist-at-Sea participants during the inaugural year aboard{" "}
        <em>Falkor (too)</em> were displayed at the Miami Convention Center and
        the Phillip and Patricia Frost Science Museum. Artists Michel Droge,
        Carlos Hiller, Shan Hua, and Max Hooper Schneider debuted their 2023
        Artist-at-sea pieces at the exhibition, and the Ocean, science, and art
        were celebrated all week.
      </p>
      <Carousel slides={slides} className="artist-sea-carousel"/>
    </DisseminatingTheDepths>
  );
}

export default ArtistAtSea;
