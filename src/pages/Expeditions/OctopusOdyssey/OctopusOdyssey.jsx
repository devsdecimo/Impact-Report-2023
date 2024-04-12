import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";

import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";
import headerImage from "/assets/images/expeditions/octopus_odyssey/Header.webp";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import MapIframe from "../../../components/MapIframe/MapIframe";

function OctopusOdyssey() {
  const slidesPath = "/assets/images/expeditions/octopus_odyssey/carousel/";

  const slides = [
    {
      img: `${slidesPath}01-Rovs.webp`,
      alt: "In the Dirty Wet Lab, the research team moves sediment push core samples.",
    },
    {
      img: `${slidesPath}02-Octo.webp`,
      alt: "An octopus — thought to be a species unknown to science — is documented during Dive 531.",
    },
    {
      img: `${slidesPath}03-Ship.webp`,
      alt: "Sergio Cambronero (Scientist, Universidad Nacional) takes part in a ship-to-shore call with a Costa Rican high school.",
    },
    {
      img: `${slidesPath}04-Shrimp.webp`,
      alt: "The expedition located a second site of low temperature (7 degrees Celsius) hydrothermal venting with brooding octopus.",
    },
    {
      img: `${slidesPath}05-Baby.webp`,
      alt: "A new octopus hatchling swims away from its egg near a small outcrop of rock unofficially called El Dorado Hill.",
    },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/octopus_odyssey/Title.svg"
            alt="Octopus Odyssey"
          />
        }
        header_image={headerImage}
        header_alt="A new octopus hatchling swims away from its egg."
        footer_image="/assets/images/expeditions/octopus_odyssey/Footer.webp"
        footer_alt="Researchers inspect an octopus and quickly confirm this is a new species."
      >
        <SectionWithImage
          image="/assets/images/expeditions/octopus_odyssey/Cienti1.webp"
          image2="/assets/images/expeditions/octopus_odyssey/Cienti2.webp"
          alt="Chief Scientist Dr. Beth Orcutt"
          alt2="Chief Scientist Dr. Jorge Cortés"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Determine if octopuses are brooding viable eggs in the warm waters
              of hydrothermal vents found at the Dorado Outcrop in Costa Rican
              waters.
            </li>
            <li>
              Ascertain linkages between the microbes harnessing energy from the
              fluids and rocks surrounding them, other microbial processes, and
              animals inhabiting the seamounts in Costa Rican waters.
            </li>
            <li>
              In June, the team deployed microbial colonization experiments and
              different types of animal shelters; they returned in December to
              recover the experiments designed to improve understanding of the
              connections between the life present and the rocks and fluids
              around these seafloor features.
            </li>
          </ul>

          <p>
            In June 2023, Co-chief Scientists Drs. Beth Orcutt and Jorge
            Cort&eacute;s led an international team to map and examine the
            Dorado Outcrop &mdash; the site of the first-discovered octopus
            nursery, found in 2013. One of their initial goals for this
            expedition was to determine if the eggs at the nursery were viable,
            as past expeditions to the outcrop had never seen evidence of
            developing embryos. The science team documented nurseries with
            hundreds of{" "}<em>Muusoctopus, </em>{" "}a genus of deep-sea octopus,
            brooding viable eggs in low-temperature hydrothermal fluids at the
            study site.
          </p>
          <BubbleImage
            image={
              "/assets/images/expeditions/octopus_odyssey/FKt230602-Dive-531-Octo-1.webp"
            }
            orientation="right"
            type={3}
            alt="An octopus — thought to be a species unknown to science — is documented during Dive 531."
          />
          <p>
            The team returned in December of 2023 to further study the nurseries
            and to collect time-series experiments placed at the site in June.
            As a result, scientists confirmed that{" "}<em>Muusoctopus</em>{" "}
            nurseries offshore of Costa Rica support baby octopuses throughout
            the year, not just during the rainy season,{" "}
            <a href="https://www.youtube.com/watch?v=wHAHe2T2dl0&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=8">
              <u>as observed in June</u>
            </a>
            . The team believes they have discovered four new octopus species
            during the two expeditions; these discoveries will undergo a
            rigorous analysis and peer review to be confirmed and published in
            the coming months. One of the discoveries may be a new species of{" "}
            <em>Muusoctopus</em>, the only type of octopus observed brooding its
            eggs on the low-temperature hydrothermal vents. This discovery
            supports the previous hypothesis that only the{" "}
            <em>Muusoctopus </em>genus has evolved to brood their eggs in warm
            springs on the seafloor.
          </p>
          <p>
            Three different kinds of low-temperature hydrothermal vents were
            detected during the expedition, each sustaining life. Fluid samples
            collected at these sites allow researchers to study the microbiomes
            of these unique hydrothermal spring waters to understand what
            functions microbes perform and how they connect to the microbiomes
            of animals living in places like these. And, the water samples
            collected have shown interconnectivity between features, which helps
            researchers understand the deep sea as a network of connected
            habitats rather than a series of isolated features.
          </p>
          <p>
            The observed deep-sea octopus and skate nurseries meet definitions
            of{" "}
            <a href="https://www.fao.org/in-action/vulnerable-marine-ecosystems/definitions/en/">
              <u>Vulnerable Marine Ecosystems</u>
            </a>{" "}
            and{" "}
            <a href="https://gobi.org/ebsas/">
              <u>Ecologically and Biologically Sensitive Areas</u>
            </a>{" "}
            because they are essential for the survival of these populations.
            These nutrient-rich ecosystems are home to sensitive species that
            are slow to recover from disturbance. The research from this
            expedition will aid in creating more effective conservation
            management plans for the country.
          </p>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <h3>Resulting highlights:</h3>
          <ul>
            <li>
              Confirmed the Dorado Outcrop hosts a year-round octopus nursery
              with hundreds of{" "}<em>Muusoctopus</em>{" "}brooding viable eggs in
              low-temperature hydrothermal fluids.
            </li>
            <li>
              Possibly discovered four new octopus species, observed a variety
              of octopus behaviors, carefully collected specimens for
              identification, and gained insights into population biology and
              animal microbiomes.
            </li>
            <li>
              Discovered a thriving deep-sea skate nursery on top of Tengosed
              Seamount.
            </li>
          </ul>
          <YoutubeVideo videoId="U5jo9IhO8NA" />
          <YoutubeVideo videoId="JYMaz6AW7f0" />
          <MapIframe url="https://api.maptiler.com/maps/44b29ef0-7763-4a93-b820-d91ba19f1629/?key=egFVe2SmC2zBUYnGILbj#5.5/9.30641/-85.89859" />
          <MapIframe url="https://api.maptiler.com/maps/23ae9b64-e335-44ec-a873-724f08db8a39/?key=egFVe2SmC2zBUYnGILbj#4.1/8.81816/-83.45626" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default OctopusOdyssey;
