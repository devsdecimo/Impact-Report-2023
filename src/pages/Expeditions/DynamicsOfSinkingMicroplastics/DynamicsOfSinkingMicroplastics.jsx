import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";
import GeneralButton from "../../../components/GeneralButton/GeneralButton";

import Prev from "/assets/images/prev.svg";
import Next from "/assets/images/next.svg";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";
import headerImage from "/assets/images/expeditions/dynamics_of_sinking_microplastics/Header.webp";

function DynamicsOfSinkingMicroplastics() {
  const slidesPath = "/assets/images/expeditions/dynamics_of_sinking_microplastics/carousel/";
  const slides = [
    { img: `${slidesPath}01-FirstCTDDeployment01.webp` },
    { img: `${slidesPath}02-FirstCTDDeployment02.webp` },
    { img: `${slidesPath}03-FirstCTDDeployment03.webp` },
    { img: `${slidesPath}04-LauraAndAlviseMc.webp` },
    { img: `${slidesPath}05-PeiWenFashionSketches.webp` },
    { img: `${slidesPath}06-WaterSamplingAndFiltration01.webp` },
    { img: `${slidesPath}07-WaterSamplingAndFiltration02.webp` },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/dynamics_of_sinking_microplastics/Title.svg"
            alt="Dynamics of Sinking Microplastics"
          />
        }
        header_image={headerImage}
        footer_image="/assets/images/expeditions/dynamics_of_sinking_microplastics/Footer.webp"
      >
        <SectionWithImage
          image="/assets/images/expeditions/dynamics_of_sinking_microplastics/FKt230802.webp"
          alt="Dr. Laura Simon Sanchez"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Investigate vertical distribution of microplastics in
              the water column, with a particular focus on particles
              as small as 10µm, which is comparable in size to the
              diameter of a droplet of rain
            </li>
            <li>
              Explore the processes that govern the sinking rate
              of microplastics to the seafloor
            </li>
            <li>
              Compare two different approaches for collecting
              microplastics in the water column of the Ocean
            </li>
          </ul>
          <h3>Resulting highlights:</h3>
          <ul>
            <li>
              The science team collected microplastic samples off the coast
              of Panama, an important region for global marine trade.
            </li>
            <li>
              Experts documented the occurrence and distribution of small
              microplastics (&lt; 300 µm or the length of a dust mite),
              providing new insight into how these pollutants are
              transported from the Ocean’s surface to the seafloor.
            </li>
            <li>
              The team conducted a comparison study on two different
              sampling methodologies — R/V <em>Falkor (too)</em>’s CTD and a
              McLane large water pump to enhance understanding of
              the most effective and accurate technique for
              sampling microplastics in the Ocean.
            </li>
          </ul>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <p>
            Plastic pollution is pervasive in our Ocean. The most prevalent
            component of plastic pollution isn’t large pieces of trash
            floating on the surface but tiny bits of waste called microplastics
            found throughout the water column. This research took place in the
            Gulf of Panama, which sees an estimated 14,000 ships transit
            through the Panama Canal each year and encompassed a wide
            bathymetric gradient from coastal waters to the deep sea.
          </p>
          {/*<BubbleImage image={image} orientation="left" type={3} />*/}
          <p>
            Globally, the seafloor is widely recognized as the final
            repository for microplastics. While larger microplastics
            are commonly seen on the Ocean's surface, smaller
            particles are more often observed accumulating in
            seafloor sediments.
          </p>
          <p>
            There is also a distinct disparity in the composition of
            floating microplastics compared to those that settle in
            the sediment layer. These differences suggest that both
            composition and particle size may play a role in
            governing how microplastics are transported to deeper
            marine environments.
          </p>
          <p>
            Our understanding of the vertical movement of microplastics
            in the marine environment remains limited, primarily due
            to a scarcity of <em>in situ</em> measurements. Studying
            microplastics beyond the surface requires building new tools
            to address knowledge gaps and improve data collection.
            The major obstacle to studying microplastics in the water
            column is an issue of scale — getting large enough water
            samples and small enough filtration resolution. To tackle
            these challenges, the team used a novel piece of equipment
            called a UFO built explicitly for studying microplastics.
            They also used the McLane large water pump and <a href="https://oceanexplorer.noaa.gov/technology/ctd/ctd.html" target="_blank">the CTD</a> to
            collect water samples from matching depths — building an
            essential picture of what microplastics exist at different
            levels in the Ocean.
          </p>
          <YoutubeVideo videoId="D5QFQ_7-RwQ" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default DynamicsOfSinkingMicroplastics;
