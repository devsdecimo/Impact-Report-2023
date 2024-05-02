import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";

import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";

import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import image from "/assets/images/expeditions/vertical_reefs_of_the_galapagos/Burbuja.webp";
import headerImage from "/assets/images/expeditions/vertical_reefs_of_the_galapagos/Header.webp";
import MapIframe from "../../../components/MapIframe/MapIframe";

function VerticalReefsOfTheGalapagos() {
  const slidesPath =
    "/assets/images/expeditions/vertical_reefs_of_the_galapagos/carousel/";
  const slides = [
    { img: `${slidesPath}01-Paulina.webp` },
    { img: `${slidesPath}02-Belen.webp` },
    { img: `${slidesPath}03-Laser.webp` },
    { img: `${slidesPath}04-Fantastic.webp` },
    { img: `${slidesPath}05-Amazing.webp` },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/vertical_reefs_of_the_galapagos/Title.svg"
            alt="Vertical Reefs of the Galapagos"
          />
        }
        header_image={headerImage}
        footer_image="/assets/images/expeditions/vertical_reefs_of_the_galapagos/Footer.webp"
      >
        <SectionWithImage
          image="/assets/images/expeditions/vertical_reefs_of_the_galapagos/Cientifico.webp"
          alt="Cruise"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Establish the geological characteristics and formation of cliff
              environments in the Gal&aacute;pagos National Park &mdash; these
              are environments where existing marine protections and their
              vertical orientation prevent damage from trawling or other
              destructive activities.
            </li>
            <li>
              Establish a coral history, creating a baseline for past climatic
              conditions.
            </li>
            <li>
              Understand the links between environmental settings, such as the
              cliff orientation, water column dynamics, features of vertical
              coral reef surfaces, and cold-water coral community biodiversity.
            </li>
            <li>
              Create detailed, high-resolution maps of the study area to inform
              future research and protection.
            </li>
          </ul>

          <p>
            The Gal&aacute;pagos Islands are home to a dazzling array of
            cold-water corals in an active geological environment, making the
            region ideal for this study. While they are understudied compared to
            shallow-water corals, a subset of these deep-dwelling animals is
            even more shrouded in mystery &mdash;{" "}
            <a href="https://www.youtube.com/watch?v=OYQUPMJyZzE&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=17">
              <u>cold-water corals living on cliffs</u>
            </a>
            . The depth and inaccessibility of vertical corals to ship-based
            sensors present significant hurdles to studying these creatures.
            Chief Scientist Katleen Robert and a multidisciplinary team
            addressed these challenges to map and characterize these
            extraordinary habitats.
          </p>
          <BubbleImage image={image} orientation="left" type={3} />
          <p>
            The science team discovered thriving cold-water coral reefs with a
            high biodiversity of associated organisms in a marine protected area
            with little deep-sea scientific information. Two major currents, the
            cold South Equatorial Current and the warmer Panama Current, flow
            around them while the Pacific Equatorial Undercurrent interacts
            directly with the islands. In addition to oceanographic patterns,
            the Gal&aacute;pagos also provides a valuable laboratory for
            studying island geology. The islands are built on pedestals of
            stacked lava flows &mdash; some of which are exposed, offering a
            stratified geological history of the archipelago. The oceanographic
            complexity of the region plays an essential role in understanding
            past and future climatic conditions.
          </p>
          <p>
            Further, the Gal&aacute;pagos National Park is a longstanding
            protected area with little human impact, and therefore, its
            cliff-dwelling coral reefs represent ecosystems in near-pristine
            conditions. These healthy conditions allow for observing natural
            patterns and establishing ecological baselines, often missing from
            well-studied but more impacted coral systems, such as those in the
            North Atlantic.
          </p>
          <p>
            In addition to investigating coral biodiversity in the
            Gal&aacute;pagos, the scientists explored areas within the Isla del
            Coco National Marine Park, a protected area managed by Costa Rica,
            to examine links between coral communities on seamounts in the
            Gal&aacute;pagos and those in Costa Rica. The data collected will
            inform the management of the Eastern Tropical Pacific Marine
            Corridor, a network of interconnected marine reserves managed by the
            governments of Ecuador, Costa Rica, Panama, and Colombia.
          </p>
          <p>
            The team deployed several advanced technologies, including
            ultra-high-resolution laser scanning, which has not been widely
            applied in studying these communities. These tools will help
            researchers create a three-dimensional reconstruction of cliff
            reefs. Shipboard multibeam echosounders provide a smooth
            representation of rough topography, creating maps with approximately
            50- to 100-meter resolution. They cannot adequately characterize the
            vertical dimension of complex 3D seafloor structures. Using an
            ROV-mounted multibeam system and laser scanner in tandem, the
            researchers created a bathymetric map and a point cloud of data
            rather than visual imagery; this can achieve a resolution of fewer
            than two millimeters and develop a detailed portrait of the vertical
            environment, revealing both geological and biological components.
          </p>
          <p>
            Following the expedition, the team is working to create an
            accessible, digital reconstruction of the cliff-dwelling coral
            ecosystems &mdash; a data visualization that allows everyone, from
            scientists to second-graders, to visit the deep sea. The data
            collected adds to human knowledge of the distribution of cold-water
            corals globally.
          </p>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>

          <h3>Resulting highlights include:</h3>
          <ul>
            <li>
              Observed thriving cold-water coral reefs teeming with anemones,
              crustaceans, cephalopods, and other organisms in an understudied
              ocean region.
            </li>
            <li>
              Provided key insights into the effectiveness of a long-established
              marine protected area; the Gal&aacute;pagos Marine Reserve data
              supports the management of two local marine protected areas
              &mdash; Gal&aacute;pagos National Park and Isla del Coco.
            </li>
            <li>
              Used ultra-high-resolution laser scanning, which has not been
              widely applied in studying these communities, to create a detailed
              3D reconstruction of the reef habitats, laying the foundation for
              connecting environmental conditions to habitat complexity,
              community composition, and biodiversity.
            </li>
          </ul>
          <p>
            Permits to conduct research in Ecuador and Galapagos Islands
            National Park waters: DIRNEA - SNA - 2023-001-O / PNG
            MAATE-DPNG/DGA-2023-1174-O / PC-51-23 / R-045-2023-OT-CONAGEBIO
          </p>
          <YoutubeVideo videoId="2WRbglQZUl0" />
          <MapIframe url="https://api.maptiler.com/maps/7c7047c5-0d5a-4209-93ba-38e5fcd60c13/?key=egFVe2SmC2zBUYnGILbj#4.0/3/-90.46" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default VerticalReefsOfTheGalapagos;
