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
import image from "/assets/images/expeditions/vertical_reefs_of_the_galapagos/Burbuja.webp"
import headerImage from "/assets/images/expeditions/vertical_reefs_of_the_galapagos/Header.webp";
import MapIframe from "../../../components/MapIframe/MapIframe";

function VerticalReefsOfTheGalapagos() {
    const slidesPath = "/assets/images/expeditions/vertical_reefs_of_the_galapagos/carousel/";
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
                Reveal geological characteristics and formation of cliff environments where existing marine protections and the vertical nature of the cliffs prevent damage from trawling and other destructive activities
            </li>
            <li>
                Establish prior coral history and create a baseline for understanding past and future climatic conditions
            </li>
            
            <li>
                Understand the links between environmental settings, such as the orientation of the cliff face, water column dynamics, and physical features of the vertical reef surfaces, and the abundance of biodiversity in cold water coral communities
            </li>
            <li>
                Test mapping technology, some new to ocean science, and create detailed, high-resolution maps of the study area to inform future research and protection
            </li>
          </ul>
          
          <h3>Resulting highlights:</h3>
          <ul>
            <li>
                The science team observed thriving cold-water coral reefs teeming with anemones, crustaceans, cephalopods, and other organisms in a vastly understudied region.
            </li>
            <li>
                Collected ample data to support two local marine protected areas — Galápagos National Park and Isla del Coco; the data provides a better understanding of the distribution of cold-water corals globally.
            </li>
            <li>
                The science team successfully used a range of technologies for mapping and sample collection, including ultra-high-resolution laser scanning, which created incredibly detailed 3D reconstructions of the reef habitats explored.
            </li>
          </ul>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <p>
            During this expedition, Chief Scientist Katleen Robert and her multidisciplinary team successfully mapped, studied, and sampled coral reefs located on steep vertical cliffs. The deep waters of the Galápagos National Park are home to a dazzling array of cold-water corals. While they are understudied compared to those in shallow waters,  these deep-dwelling animals are even more shrouded in mystery because the depth and inaccessibility of vertical cold-water corals by ship-based sensors present significant hurdles to studying them.
          </p>
          
          <BubbleImage image={image} orientation="left" type={3} />
          <p>
            Robert and the team discovered thriving cold-water coral reefs with high biodiversity of associated organisms in an area for which there was little deep sea information. This new information will support the local marine protected area, and advance our understanding of the distribution of cold-water coral globally. As the Galápagos National Park is a protected area with little human impact, its cliff-dwelling coral reefs represent ecosystems in pristine condition and will serve as a baseline for understanding future and past changes.
          </p>

          <p>
            They deployed a number of advanced technologies, including ultra-high-resolution laser scanning, to create a three-dimensional reconstruction of these cliff reefs. The laser scanner creates a point cloud of data rather than visual imagery and can achieve an incredibly fine resolution of less than two millimeters. Following the expedition, the team is working to create an accessible, digital reconstruction of the cliff-dwelling coral ecosystems—a data visualization that allows everyone, from scientists to second-graders, to visit the deep sea.
          </p>
          <YoutubeVideo videoId="2WRbglQZUl0" />
          <MapIframe url="https://api.maptiler.com/maps/7c7047c5-0d5a-4209-93ba-38e5fcd60c13/?key=egFVe2SmC2zBUYnGILbj#4.0/3/-90.46"/>
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default VerticalReefsOfTheGalapagos;
