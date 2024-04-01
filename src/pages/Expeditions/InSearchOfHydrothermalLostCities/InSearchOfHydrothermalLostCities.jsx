import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";

import image from "/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/carousel/01-SunriseOnTheBridge.webp";
import image2 from "/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/carousel/02-Dive491.webp";
import image3 from "/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/carousel/03-VentFaunaReflectiveP.webp";
import image4 from "/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/carousel/04-CaressPaduanJeff.webp";
import image5 from "/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/carousel/05-AUVLaunchAndRecovery.webp";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";

import headerImage from "/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/Header.webp";

function InSearchOfHydrothermalLostCities() {
  const slides = [
    { img: image },
    { img: image2 },
    { img: image3 },
    { img: image4 },
    { img: image5 },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/Title.svg"
            alt="In Search Of Hydrothermal Lost Cities"
          />
        }
        header_image={headerImage}
        footer_image="/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/Footer.webp"
      >
        <SectionWithImage
          image="/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/David.webp"
          alt="Cruise"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Accelerate discovery and characterization of deep-sea hydrothermal
              systems, targeting oceanic core complexes, which are locations
              where mantle rock is exposed to cold seawater
            </li>
            <li>
              Find hydrothermal activity on Puys des Folles volcano, an area
              believed to host only inactive vent structures
            </li>
            <li>
              Demonstrate the effectiveness of using a combination of
              technologies — such as multibeam sonar from <em>Falkor (too)</em>{" "}
              and AUVs — to rapidly locate and characterize hydrothermal vents
            </li>
          </ul>
          <h3>Resulting highlights:</h3>
          <ul>
            <li>
              The first research expedition on board R/V <em>Falkor (too)</em>{" "}
              found high-temperature hydrothermal vent fields present at all
              three study areas, including Puy des Folles, which was previously
              thought to be inactive.{" "}
            </li>
            <li>
              The team discovered a new vent field, nicknamed the Birthday Vent.
            </li>
            <li>
              Researchers demonstrated the success of a nested approach, using
              multibeam sonar, AUVs, CTD casts, and an ROV, to rapidly locate
              hydrothermal vents on the seafloor.{" "}
            </li>
          </ul>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <p>
            The first scientific expedition of SOI’s new research vessel{" "}
            <em>Falkor (too)</em> was a multi-pronged exploration developed to
            accelerate the discovery and characterization of deep-sea
            hydrothermal systems, targeting oceanic core complexes at the
            Mid-Atlantic Ridge, the world{"'"}s longest underwater mountain range.
            Oceanic core complexes are locations where mantle rock is exposed to
            cold seawater.
          </p>
          <BubbleImage image={'/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/ChalcopyrateFromBlackSmokerDive.webp'} orientation="left" type={3} />
          <p>
            Locating three active hydrothermal vent fields is the first
            discovery on this section of the Mid-Atlantic Ridge in more than 40
            years. One of the discovered vent fields was located at the Puy des
            Folles volcano and has five active sites over 6.95 square miles, or
            18 square kilometers. High-temperature black smoker vents were found
            at the Grappe Deux Vent System and Kane Fracture Zone.
          </p>

          <p>
            Hydrothermal mineral deposits at inactive vents on the Mid-Atlantic
            Ridge could be potential targets for deep-sea mining sites.
            Proponents of deep-sea mining suggest that mineral extraction does
            not pose a threat at inactive sites, as they suspect no animals live
            at these locations. To protect these understudied systems from
            mining, it is essential to establish where animal communities exist
            on the mid-Atlantic ridge and their relationship to the surrounding
            geological and chemical conditions.
          </p>
          <p>
            The expedition combined the use of Autonomous Underwater Vehicles,
            or AUVs, to produce high-resolution maps of the seafloor, Miniature
            Autonomous Plume Recorders to sense the water column, and ROV{" "}
            <em>SuBastian</em> to conduct visual surveys and sampling of the
            seafloor. This nested approach demonstrated the effectiveness of
            combining technologies to illuminate how the current geologic
            setting controls hydrothermal chemistry and habitat conditions.
          </p>
          <YoutubeVideo videoId="2RSCnSUe6Nc" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default InSearchOfHydrothermalLostCities;
