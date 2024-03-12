import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";

import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";

function UltrafineScaleSeafloorMapping() {
    const slidesPath = "/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/carousel/";
    /*OLD CAROUSEL
    const slides = [
      { img: `${slidesPath}ControlRoom.webp` },
      { img: `${slidesPath}Huellos.webp` },
      { img: `${slidesPath}Labwork.webp` },
      { img: `${slidesPath}Naranjo.webp` },
      { img: `${slidesPath}Vent.webp` },
      { img: `${slidesPath}Working.webp` },
      { img: `${slidesPath}Working2.webp` },
    ];*/
    const slides = [
      { img: `${slidesPath}01-Vent.webp` },
      { img: `${slidesPath}02-Huellos.webp` },
      { img: `${slidesPath}03-Julian.webp` },
      { img: `${slidesPath}04-Sas.webp` },
      { img: `${slidesPath}05-ControlRoom.webp` },
    ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/Title.svg"
            alt="Vertical Reefs of the Galapagos"
          />
        }
        header_image="/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/Header.webp"
        footer_image="/assets/images/expeditions/ultra_fine_scale_seafloor_mapping/Footer.webp"
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
                Evaluate and develop the potential use of interferometric synthetic aperture sonar (InSAS) as a tool for seafloor exploration, classification, and monitoring
            </li>
            <li>
                Investigate the evolution of hydrothermal vents, especially once they become inactive or extinct
            </li>
          </ul>
          <h3>Resulting highlights:</h3>
          <ul>
            <li>
                The science team demonstrated that high-quality, incredibly detailed InSAS imagery can be generated from an ROV, proving it can be collected over rough terrain, and expanding the known operating conditions (speed, altitude, swath, terrain variability) under which data can be effectively acquired.
            </li>
            <li>
                Researchers discovered a new high-temperature vent field, which they named Tortugas, located within the caldera of the Los Huellos East volcano. Several new active vent sites and numerous inactive vent fields were also mapped.
            </li>
            <li>
                Video footage from ROV <em>SuBastian</em> revealed <a href="https://www.biorxiv.org/content/10.1101/2023.11.28.568903v1.full" target="_blank">the presence of 15 animal species</a> previously not recorded in this region of the Ocean, some of which may be new to science. A skate nursery associated with hydrothermal vents was also discovered. 
            </li>
          </ul>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <p>
            The team expertly tested a sonar system new to scientific seafloor mapping, <a href="https://www.youtube.com/watch?v=m7_I4kYlchU" target="_blank">Interferometric Synthetic Aperture Sonar (InSAS)</a>, which enabled them to locate seafloor features with greater accuracy and produce detailed, high-resolution maps. The InSAS technology combines bathymetric data with acoustic imagery, generating detailed maps using sound. Using this technology could transform the ability to map, explore, classify, and monitor the seafloor environment.
          </p>

          {/*<BubbleImage image={Cientifico} orientation="left" type={3} />*/}
          <p>
            Using InSAS, the science team imaged individual pillows, chimneys, and faults — features that would not necessarily be identifiable in traditional high-resolution multibeam data. They were able to determine whether the hydrothermal vents were active or inactive by visualizing the thermal distortion caused by the hot fluids. The combination of InSAS and multibeam mapping by the ROV created high-resolution bathymetry that improved the efficiency of ROV exploration.  Detailed mapping data led the scientists to discover several sites of active and inactive venting on the seafloor,  exceeding their exploration and sampling expectations for the expedition.
          </p>
          <p>
            Overall, the discoveries reveal insights about the distribution of hydrothermal vents along mid-ocean ridges and the distribution of organisms along those vents, which vary in age and degree of venting. Scientists will also be able to understand how these thriving communities evolve once a vent ceases to be active. 
          </p>
          <p>
            The science team observed 15 species previously not known to live in the region and two that are likely new to science. The list includes a specimen of <em>Neopilina galatheae</em>, never before seen in this region. The scientists also uncovered a Pacific White Skate nursery, resulting in the second confirmed deep-sea skate nursery in the Pacific Ocean.
          </p>
          <YoutubeVideo videoId="m7_I4kYlchU" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default UltrafineScaleSeafloorMapping;
