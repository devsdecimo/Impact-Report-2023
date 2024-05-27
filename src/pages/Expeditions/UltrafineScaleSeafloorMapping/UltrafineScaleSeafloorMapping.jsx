import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";

import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";

import image from "/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/image.webp";

import headerImage from "/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/Header.webp";
import MapIframe from "../../../components/MapIframe/MapIframe";

function UltrafineScaleSeafloorMapping() {
  const slidesPath =
    "/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/carousel/";
  const slides = [
    {
      img: `${slidesPath}01-Vent.webp`,
      alt: "Hydrothermal vent ecosystem life, including tube worms, fish, bivalves, and crustaceans.",
    },
    {
      img: `${slidesPath}02-Huellos.webp`,
      alt: "InSAS image of lava flows (pillow basalts and lobate flows) from the floor of the Los Huellos East caldera.",
    },
    {
      img: `${slidesPath}03-Julian.webp`,
      alt: "Juliana Diehl and Kaarel Kaspar closely monitor SuBastian's instruments during a test dive.",
    },
    {
      img: `${slidesPath}04-Sas.webp`,
      alt: "John Jamieson, Chong Chen, and Caroline Gini observe the first successful images from the inSAS sent up from SuBastian while diving.",
    },
    {
      img: `${slidesPath}05-ControlRoom.webp`,
      alt: "Members of the research team in R/V Falkor (too)’s ROV control room.",
    },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/Title.svg"
            alt="Ultrafine Scale Seafloor Mapping"
          />
        }
        header_image={headerImage}
        header_alt="Hydrothermal vent ecosystem life, including tube worms, fish, and bivalves."
        footer_image="/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/Footer.webp"
        footer_alt="The Deep Acoustic Lander is recovered to R/V Falkor (too)’s aft deck."
      >
        <SectionWithImage
          image="/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/Cientifico.webp"
          alt="Cruise"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Evaluate and develop interferometric synthetic aperture sonar, or
              InSAS, as a tool for seafloor exploration, classification, and
              monitoring.
            </li>
            <li>
              Investigate the evolution of hydrothermal vents, especially once
              they become inactive or extinct.
            </li>
          </ul>

          <p>
            Seafloor mapping is integral to oceanographic research. Bathymetric
            data illustrate the seafloor&rsquo;s depth, contours, and physical
            features, and it is often the first essential step in planning a
            successful submersible operation. Ship-mounted multibeam sonar
            produces maps that are 50- to 100-meters in resolution; this means
            features smaller than 50- to 100-meters are not visible.
          </p>
          <BubbleImage
            image={image}
            orientation="left"
            type={3}
            alt="Moronke Harris breaks rocks samples to process for bacteria."
          />
          <p>
            During this expedition, led by Chief Scientist Dr. John Jamieson, an
            international team tested a sonar system new to scientific seafloor
            mapping,{" "}
            <a
              href="https://www.youtube.com/watch?v=m7_I4kYlchU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Interferometric Synthetic Aperture Sonar, or InSAS</u>
            </a>
            , which enabled them to locate seafloor features with greater
            accuracy and produce detailed, high-resolution maps. Combining
            bathymetric data from multibeam sonar with acoustic imagery gathered
            by InSAS, the team generated what the researchers liken to a
            photograph created with sound instead of light. This technology will
            transform the ability to map, explore, classify, and monitor the
            seafloor environment in extremely high detail, and it{" "}
            <a
              href="https://youtu.be/m7_I4kYlchU?si=_yYeMV7x1Ba-lSYX&amp;t=144"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>
                dramatically reduces the time needed to explore and locate
                seafloor features
              </u>
            </a>
            .
          </p>
          <p>
            The discoveries, including a new high-temperature vent field, reveal
            insights into the distribution of hydrothermal vents along mid-ocean
            ridges and the distribution of organisms along those vents, which
            vary among the age of the vent and the amount of venting. As a
            result, scientists will better understand how these thriving
            communities evolve once a vent ceases to be active.
          </p>
          <p>
            Additionally, the team observed 15 species previously not known to
            live in the region and two that are likely new to science. The list
            includes a rare <em>in situ</em> sighting and specimen collection of
            a <em>Neopilina galatheae</em>, a limpet-like marine mollusk that
            has never been seen in this region. The scientists also discovered a
            Pacific white skate nursery associated with hydrothermal vents.
          </p>
          <p>
            Using InSAS, the science team imaged individual pillows, chimneys,
            and faults &mdash; features that would not be identifiable in
            traditional high-resolution multibeam data collected from the
            vessel. They could determine whether the hydrothermal vents were
            active or inactive by visualizing the thermal distortion in the
            imagery caused by the hot fluids. The InSAS data led scientists to
            discover several active and inactive venting sites on the seafloor,
            exceeding exploration and sampling expectations for the expedition.
            Ultimately, the researchers believe InSAS will be a powerful tool
            for gathering more data on what exactly lies on the ocean bottom.
            The science team hopes to prove this tool's usefulness and scale its
            use for government and scientific exploration, informing whether
            certain regions of the seafloor should be protected and if
            activities such as fishing or deep-sea mining should be prevented.
          </p>

          <Carousel slides={slides} className="expedition-carousel"></Carousel>

          <h3>Resulting highlights include:</h3>
          <ul>
            <li>
              Demonstrated that high-quality, detailed InSAS imagery can be
              generated from an ROV, including over rough terrain, and expanded
              the known operating conditions &mdash; such as speed, altitude,
              swath, terrain, and variability &mdash; under which data can be
              effectively acquired.
            </li>
            <li>
              Discovered a new high-temperature vent field, informally named
              Tortugas, located within the caldera of the Los Huellos East
              volcano; several new active vent sites and numerous inactive vent
              fields were also mapped.
            </li>
            <li>
              Video footage revealed the{" "}
              <a
                href="https://www.biorxiv.org/content/10.1101/2023.11.28.568903v1.full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>presence of 15 animal species previously not recorded</u>
              </a>{" "}
              in this region of the Ocean, some of which may be new to science;
              a skate nursery associated with hydrothermal vents was also
              discovered and sampled.
            </li>
          </ul>
          <p>
            Permits to conduct research in Ecuador and Galapagos Islands
            National Park waters: DIRNEA-SNA-019-2023 /
            MAATE-DPNG/DGA-2023-1543-O / PC-51-23
          </p>

          <YoutubeVideo videoId="m7_I4kYlchU" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default UltrafineScaleSeafloorMapping;
