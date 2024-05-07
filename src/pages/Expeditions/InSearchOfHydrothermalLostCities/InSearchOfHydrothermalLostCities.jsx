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
import MapIframe from "../../../components/MapIframe/MapIframe";

function InSearchOfHydrothermalLostCities() {
  const slides = [
    {
      img: image,
      alt: "Sunrise on the bridge of R/V Falkor (too) during the expedition over the Mid-Atlantic Ridge.",
    },
    {
      img: image2,
      alt: "Large amounts of shrimp (possibly Rimacaris exoculata) were observed on high-temperature hydrothermal vent chimneys with black smoke; the tallest chimney was about 20 meters high.",
    },
    {
      img: image3,
      alt: "Many creatures at hydrothermal vent sites — such as tube worms, mussels, or shrimps — often have symbiotic relationships with chemosynthetic bacteria",
    },
    {
      img: image4,
      alt: "Scientists look at bathymetry renderings of target destinations, trying to discern the story behind the many geological features of the areas.",
    },
    {
      img: image5,
      alt: "R/V Falkor (too) during the launch and recovery of the Dorado-class mapping AUVs.",
    },
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
        header_alt="A high-temperature hydrothermal vent field discovered during an expedition to the Mid-Atlantic Ridge."
        footer_image="/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/Footer.webp"
        footer_alt="A detailed image of coral polyps off the coast of Puerto Rico."
      >
        <SectionWithImage
          image="/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/David.webp"
          alt="Chief Scientist Dr. David Butterfield"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Accelerate discovery and characterization of deep-sea hydrothermal
              systems, targeting oceanic core complexes, which are locations
              where mantle rock is exposed to cold seawater.
            </li>
            <li>
              Find hydrothermal activity in the Puys des Folles vent field, an
              area believed to host only inactive vent structures.
            </li>
            <li>
              Demonstrate the effectiveness of a{" "}
              <a href="https://www.youtube.com/watch?v=BFqRPOZqpnw&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=32" target="_blank" rel="noopener noreferrer">
                <u>nested approach</u>
              </a>{" "}
              that uses a combination of technologies to progressively increase
              the resolution of data collected, making it possible to locate and
              characterize hydrothermal vents rapidly.
            </li>
          </ul>

          <p>
            In 2000, scientists found a new alkaline hydrothermal vent system on
            the{" "}
            <a href="https://new.nsf.gov/news/scientists-discover-secrets-lost-city" target="_blank" rel="noopener noreferrer">
              <u>Atlantis Massif</u>
            </a>{" "}
            and named it the Lost City. Ghostly towers made of limestone sprang
            from the seafloor, spewing clear liquid, with very few creatures
            dwelling around them. The scientists found the chemistry vastly
            different from that of black smoker vents on the nearby Mid-Atlantic
            Ridge volcanoes. They determined that the reaction creating this
            type of vent occurs on a geologic formation known as an oceanic core
            complex, where mantle rock is exposed to cold seawater. These
            carbonate vents form when the seawater and mantle rock react in a
            process known as serpentinization. The first scientific expedition
            aboard the research vessel <em>Falkor (too)</em> was designed to
            accelerate the discovery and characterization of deep-sea
            hydrothermal systems as they searched for new vents like those at
            Lost City.
          </p>
          <BubbleImage
            image={
              "/assets/images/expeditions/in_search_of_hydrothermal_lost_cities/ChalcopyrateFromBlackSmokerDive.webp"
            }
            orientation="left"
            type={3}
          />
          <p>
            In March, Chief Scientist Dr. David Butterfield led
            this expedition to explore a section of the Mid-Atlantic Ridge to
            locate vents where serpentinization occurs. The study area included
            Puy des Folles, an on-axis volcano, an oceanic core complex
            associated with the eastern intersection of the Mid-Atlantic Ridge,
            the Kane Fracture Zone, and one{" "}
            <a href="https://en.wikipedia.org/wiki/Fracture_zone" target="_blank" rel="noopener noreferrer">
              <u>non-transform ridge offset </u>
            </a>{" "}
            called Grappe Deux.
          </p>
          <p>
            Ultimately, they did not locate any vents like the Lost City type.
            However, they systematically searched and{" "}
            <a href="https://www.youtube.com/watch?v=JsOv8Kp1jDE" target="_blank" rel="noopener noreferrer">
              <u>discovered three active hydrothermal vent fields</u>
            </a>
            . One is located at the Puy des Folles volcano, where there are five
            active sites over 7 square miles or 18 square kilometers. They
            discovered high-temperature black smoker vents at the Grappe Deux
            Vent System and Kane Fracture Zone. These were the first new vents
            located in the region{" "}
            <a href="https://vents-data.interridge.org/" target="_blank" rel="noopener noreferrer">
              <u>in more than 40 years</u>
            </a>
            .
          </p>
          <p>
            The expedition team&rsquo;s nested approach included Autonomous
            Underwater Vehicles, or AUVs, to produce high-resolution maps of the
            seafloor; Miniature Autonomous Plume Recorders mounted onto the
            ship’s CTD and rosette to sense chemical signals in the water
            column; and ROV{" "}
            <em> SuBastian</em> to conduct visual surveys and sampling of the
            seafloor. The effectiveness of using a nested approach is evident as
            it allowed researchers to discover and characterize vent activity in
            just a few days, which NOAA Oceanographer{" "}
            <a href="https://youtu.be/BFqRPOZqpnw?si=D1ow8avd7x2u0qaq&amp;t=66" target="_blank" rel="noopener noreferrer">
              <u>Dr. Sharon Walker describes</u>
            </a>{" "}
            as a miraculous timeframe.
          </p>
          <p>
            Discovering active venting at these locations also revealed that the
            region{" "}
            <a href="https://www.youtube.com/watch?v=rPxqrxfQ7-E&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=31" target="_blank" rel="noopener noreferrer">
              <u>hosts thriving ecosystems</u>
            </a>
            . To fully protect these fragile habitats, it is essential to
            understand where animal communities exist on the Mid-Atlantic Ridge
            around these active vents and their relationship to the surrounding
            geological and chemical conditions.
          </p>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>

          <h3>Resulting highlights include:</h3>
          <ul>
            <li>
              Finding active high-temperature hydrothermal vent fields present
              at all study areas along a 434-mile stretch of the Mid-Atlantic
              Ridge, including Puy des Folles, previously thought to be
              inactive.
            </li>
            <li>
              The discovery of three new vent fields bustling with organisms in
              areas previously thought to be devoid of life.
            </li>
            <li>
              Demonstrating the success of a nested approach of technologies
              that rapidly accelerated the time needed{" "}
              <a href="https://www.youtube.com/watch?v=2RSCnSUe6Nc&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=30" target="_blank" rel="noopener noreferrer">
                <u>to locate and discover hydrothermal vents</u>
              </a>{" "}
              on the seafloor.
            </li>
          </ul>
          <YoutubeVideo videoId="2RSCnSUe6Nc" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default InSearchOfHydrothermalLostCities;
