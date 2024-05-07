import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";

import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";

import headerImage from "/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Header.webp";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import MapIframe from "../../../components/MapIframe/MapIframe";

function HydrothermalVentsOfTheWesternGalapagos() {
  const slidesPath =
    "/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/carousel/";
  const slides = [
    {
      img: `${slidesPath}FKt230812-Dive562MissionControl-20230818-Ingle-7938-Approved.webp`,
      alt: "Jaycee Favela (Physical Scientist, USGS - Santa Cruz) watches black smokers on Mission Control screens.",
    },
    {
      img: `${slidesPath}FKt230812-PeteAndreaAndPhilPressureExperiment-20230901-Ingle-3752-APPROVED.webp`,
      alt: "Peter Girguis (Professor, Harvard University) shows Philip Yang (Student, University of Rhode Island) and Andrea Unzueta Martinez (Postdoctoral Researcher, Harvard University) a titanium pressure vessel in a laboratory container. This enables the team to keep specimens at deep sea pressures in order to better understand them.",
    },
    {
      img: `${slidesPath}FKt230812-S0566-20230824T163304Z-Approved-SubastianBothArmsIgt.webp`,
      alt: " ROV SuBastian taking samples of hydrothermal vent fluid at Pingüinos (Western Galapagos Spreading Center).",
    },
    {
      img: `${slidesPath}Fkt230812-S0570-20230830T133535Z-scitoo-Grimalditeuthis-APPROVED.webp`,
      alt: "This rare encounter with a Grimalditeuthis squid took place near the Navidad Vent Field in the Galapagos Islands.",
    },
    {
      img: `${slidesPath}FKt230812-ScienceTeamMobilisation-20230812-Ingle-5175-APPROVED.webp`,
      alt: "Jill McDermott (Co-Chief Scientist, University of Rhode Island) prepares equipment in the Main Lab on Falkor (too).",
    },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Title.svg"
            alt="Hydrothermal Vents of the Western Galapagos"
          />
        }
        header_image={headerImage}
        header_alt="A large cluster of riftia tube worms."
        footer_image="/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Footer.webp"
        footer_alt="ROV SuBastian diving on Iguanas Hydrothermal Vent Field in Galapagos National Park of Ecuador."
      >
        <SectionWithImage
          image="/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Cientifico1.webp"
          image2="/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Cientifico2.webp"
          alt=""
          alt2=""
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Characterize vent fluid chemistry and assess the relationship
              between hotspot influence and vent fluid compositions at the
              Western Gal&aacute;pagos Spreading Center.
            </li>
            <li>
              Study animal and microbial communities at the Western
              Gal&aacute;pagos Spreading Center to understand how they relate to
              vent fluid composition and mineralogy while comparing them to
              nearby vent sites within this region and other regions in the
              tropical Eastern Pacific.
            </li>
            <li>
              Deploy a new fiber-optic distributed temperature sensor called a
              DTS to measure temperature changes that will deepen our
              understanding of seafloor hydrology and the role of temperature in
              animal distributions.
            </li>
          </ul>
          <p>
            Hydrothermal vents have been located in all five ocean basins, yet
            they remain one of Earth&rsquo;s most mysterious and understudied
            ecosystems. The Western Gal&aacute;pagos Spreading Center, or WGSC,
            provides a natural laboratory for understanding geological,
            chemical, and biological interactions, which was the focus of this
            science team. The work revealed variations between nearby vents and
            across the Eastern Pacific.
          </p>
          <BubbleImage
            image={
              "/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Fkt230812-S0562-055056Z-Approved-VentLandscape.webp"
            }
            orientation="right"
            type={3}
            alt="Stunning chimneys and geologic structures formed by hydrothermal venting. Iguanas Vent Field, Galapagos Islands."
          />
          <p>
            The team explored four locations with hydrothermal vent activity,
            including Iguanas and Ping&uuml;inos, located within the
            Gal&aacute;pagos Marine Reserve. At the Navidad site, which a towed
            camera had previously detected, the ROV <em>SuBastian </em>dives
            were the first visits to the field by a deep-submergence vehicle. In
            the 2000s, scientists observed chemical signatures that indicated
            other vents were present in the region, but their existence and
            location had not been determined. On this expedition, the team
            successfully located vents and informally named the field Sendero
            del Cangrejo for the trail of crabs that drew their attention to the
            location.
          </p>
          <p>
            The science team, led by Drs. Roxanne Beinart and Jill McDermott,
            explored with ROV <em>SuBastian </em>and an ROV-mounted sonar,
            conducted CTD and rosette casts, collected water samples for
            microbiology, successfully tested a new fiber-optic DTS device, and
            produced new high-resolution maps of the region. This expedition
            represents the most comprehensive sample collection taken at the
            Iguanas and Pingüinos vent sites and the first at the Navidad and
            Sendero del Cangrejo vent sites. Samples will help the scientists
            create a big-picture view of how life on hydrothermal vents
            functions across time and space, as they offer a comparison to the
            vents on the eastern portion of the Gal&aacute;pagos Spreading
            Center. Examining the differences between vents from the same region
            provides insight and data into their potential connectivity or lack
            thereof. This comparative data is valuable for ocean decision-makers
            in boosting protection and establishing regulation, especially as
            Ecuador, Panama, Columbia, and Costa Rica work together to establish
            the Eastern Tropical Pacific Marine Corridor, a marine protected
            area that would be managed jointly by these countries.
          </p>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>

          <h3>Resulting highlights include:</h3>
          <ul>
            <li>
              The most comprehensive geological, chemical, and biological
              samples collected in the Western Gal&aacute;pagos Spreading Center
              for comparison to sites at the Eastern Gal&aacute;pagos Spreading
              Center.
            </li>
            <li>
              Demonstrated the successful use of the DTS device, which measured
              temperature every two minutes synoptically along the length of two
              fiber optic cables approximately 150 meters, providing a
              week&rsquo;s worth of time-series temperature data at a resolution
              of 0.01 degrees Celsius.
            </li>
          </ul>
          <p>
            Permits to conduct research in Ecuador and Galapagos Islands
            National Park waters: INOCAR: 005-2023 / MAATE -
            DPNG/DGA-2023-0938-O / PC-51-23
          </p>
          <YoutubeVideo videoId="YAW2x2OURZA" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default HydrothermalVentsOfTheWesternGalapagos;
