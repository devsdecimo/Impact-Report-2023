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
  const slidesPath = "/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/carousel/";
  const slides = [
    { img: `${slidesPath}FKt230812-Dive562MissionControl-20230818-Ingle-7938-Approved.webp`, alt:'Jaycee Favela (Physical Scientist, USGS - Santa Cruz) watches black smokers on Mission Control screens.' },
    { img: `${slidesPath}FKt230812-PeteAndreaAndPhilPressureExperiment-20230901-Ingle-3752-APPROVED.webp`, alt:'Peter Girguis (Professor, Harvard University) shows Philip Yang (Student, University of Rhode Island) and Andrea Unzueta Martinez (Postdoctoral Researcher, Harvard University) a titanium pressure vessel in a laboratory container. This enables the team to keep specimens at deep sea pressures in order to better understand them.' },
    { img: `${slidesPath}FKt230812-S0566-20230824T163304Z-Approved-SubastianBothArmsIgt.webp`, alt:' ROV SuBastian taking samples of hydrothermal vent fluid at Pinguinos (Western Galapagos Spreading Center).' },
    { img: `${slidesPath}Fkt230812-S0570-20230830T133535Z-scitoo-Grimalditeuthis-APPROVED.webp`, alt:'This rare encounter with a Grimalditeuthis squid took place near the Navidad Vent Field in the Galapagos Islands.' },
    { img: `${slidesPath}FKt230812-ScienceTeamMobilisation-20230812-Ingle-5175-APPROVED.webp`, alt:'Jill McDermott (Co-Chief Scientist, University of Rhode Island) prepares equipment in the Main Lab on Falkor (too).' },
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
        header_alt='A large cluster of riftia tube worms.'
        footer_image="/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Footer.webp"
        footer_alt='ROV SuBastian diving on Iguanas Hydrothermal Vent Field in Galapagos National Park of Ecuador.'
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
                Characterize vent fluid chemistry and assess the relationship between hotspot influence and vent fluid compositions at Western Galápagos Spreading Center
            </li>
            <li>
                Study animal and microbial communities at these sites to understand how they relate to vent fluid composition and mineralogy, while comparing them to nearby vent sites both within this region and to other regions in the tropical Eastern Pacific
            </li>
            <li>
                Deploy a new fiber-optic distributed temperature sensor, or DTS, device to measure temperature changes to deepen our understanding of seafloor hydrology and the role of temperature in animal distributions
            </li>
          </ul>
          <h3>Resulting highlights:</h3>
          <ul>
            <li>
                Samples collected on this expedition represent the most comprehensive geological, chemical, and biological samples taken in the region, and support a thorough multidisciplinary description of these sites, and a comparison to sites at the Eastern Galápagos Spreading Center.
            </li>
            <li>
                The science team deployed the DTS at a record-breaking length of ~150 meters and collected a week’s worth of time series temperature data.
            </li>
            <li>
                ROV-mounted sonar was used to produce new high-resolution maps of both previously mapped and unmapped sites.
            </li>
          </ul>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <p>
            Chief Scientists Roxanne Beinart and Jill McDermott led this expedition in the Galápagos to uncover the mysteries of unexplored hydrothermal vents at the Western Galápagos Spreading Center, or WGSC. The science team examined and sampled the site’s unique chemistry, geology, and biology — revealing variations from nearby vents and across the eastern Pacific. Over the last forty-five years, hydrothermal vents have been uncovered in all five Ocean basins. Much progress has been made in understanding their inner workings, yet they remain one of Earth’s most mysterious and understudied ecosystems. 
          </p>
          <BubbleImage image={"/assets/images/expeditions/hydrothermal_vents_of_the_western_galapagos/Fkt230812-S0562-055056Z-Approved-VentLandscape.webp"} orientation="right" type={3} alt='Stunning chimneys and geologic structures formed by hydrothermal venting. Iguanas Vent Field, Galapagos Islands.'/>
          <p>
            Beinart and her team explored the WGSC, just a few hundred kilometers from the original site where hydrothermal vent communities were discovered in the late 1970s. The team worked at four under or unexplored deep-sea hydrothermal vent sites along the WGSC in Ecuadorian waters. Two of the sites, Iguanas and Pinguinos, are located within the Galápagos Marine Reserve. These sites had been visited previously by deep-sea research expeditions a few times, most recently in 2015. One site, Navidad, had only been detected previously by a towed camera, so the ROV dives there were the first visit to the site by a deep-submergence vehicle. They also conducted operations at two additional sites to locate previously detected but unconfirmed vent fields and successfully located vents at one of these two sites, now called Sendero del Cangrejo.
          </p>
          <p>
            Altogether, 282 hours was spent exploring with ROV <em>SuBastian</em> and ROV-mounted sonar, conducting multiple <a href="https://oceanexplorer.noaa.gov/technology/ctd/ctd.html" target="_blank">CTD casts</a>, and performing week-long testing of a new fiber-optic DTS device, which was successful. As a result, 339 geological, geochemical, and biological samples were collected and new high-resolution maps of the region were produced.
          </p>
          <p>
            Rich data and samples collected on this expedition will help scientists create a big-picture view of how life on vents functions across time and space, reacting to an ever-changing Earth. The WGSC area is interesting compared to other vent systems and is on its own as a natural laboratory for understanding interactions between geology, chemistry, and biology. 
          </p>
          <YoutubeVideo videoId="YAW2x2OURZA" />
          <MapIframe url="https://api.maptiler.com/maps/1e625064-cc3b-4d1d-9e18-d6736ca01283/?key=egFVe2SmC2zBUYnGILbj#3.6/3.31779/-86.57269"/>
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default HydrothermalVentsOfTheWesternGalapagos;
