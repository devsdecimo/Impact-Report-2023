import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";

import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";
import headerImage from "/assets/images/expeditions/dynamics_of_sinking_microplastics/Header.webp";
import MapIframe from "../../../components/MapIframe/MapIframe";

function DynamicsOfSinkingMicroplastics() {
  const slidesPath =
    "/assets/images/expeditions/dynamics_of_sinking_microplastics/carousel/";
  const slides = [
    {
      img: `${slidesPath}01-FirstCTDDeployment01.webp`,
      alt: "Laura Simon Sanchez, Chief Scientist, prepares the UFO water filtration systems.",
    },
    {
      img: `${slidesPath}02-FirstCTDDeployment02.webp`,
      alt: "The team switches out filters in between pump deployments.",
    },
    {
      img: `${slidesPath}03-FirstCTDDeployment03.webp`,
      alt: "Alvise Vianello prepares the UFO water filtration systems at sunset near the CTD Launch and Recovery (LARS) system.",
    },
    {
      img: `${slidesPath}04-LauraAndAlviseMc.webp`,
      alt: "Laura Simon Sanchez, Chief Scientist, handles a water sample near the McLane pump sampler.",
    },
    {
      img: `${slidesPath}05-PeiWenFashionSketches.webp`,
      alt: "Artist-at-Sea Pei-Wen Jin discusses her fashion design sketch ideas with the research team while on R/V Falkor(too).",
    },
    {
      img: `${slidesPath}06-WaterSamplingAndFiltration01.webp`,
      alt: "Jeanette Lykkemark works on the UFO water filtration systems.",
    },
    {
      img: `${slidesPath}07-WaterSamplingAndFiltration02.webp`,
      alt: "Asbjørn Haaning Nielsen (L) and Jeanette Lykkemark monitor data from sensors installed on the CTD.",
    },
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
        header_alt="Alvise Vianello prepares the UFO water filtration systems."
        footer_image="/assets/images/expeditions/dynamics_of_sinking_microplastics/Footer.webp"
        footer_alt="The team prepares sensors on the CTD and rosette before a deployment."
      >
        <SectionWithImage
          image="/assets/images/expeditions/dynamics_of_sinking_microplastics/FKt230802.webp"
          alt="Laura Simon Sanchez, Chief Scientist"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Investigate the vertical distribution of microplastics in the
              water column, focusing on particles as small as 10&micro;m,
              comparable in size to a droplet of rain.
            </li>
            <li>
              Explore the processes that govern the sinking rate of
              microplastics to the seafloor.
            </li>
            <li>
              Compare two different approaches for collecting microplastics in
              the water column of the Ocean, including a new piece of technology
              called the AAU-UFO, which is capable of 300-, 10-, and even
              1-&micro;m filtration of large volumes of water samples; AAU-UFO
              stands for Aalborg University Universal Filtering Object.
            </li>
          </ul>

          <p>
            Evidence suggests that microplastics are ubiquitous in the Ocean
            &mdash; tiny particles of plastic are found throughout the water
            column. While larger particles, easily visible to the human eye, are
            commonly seen on the Ocean's surface, much smaller particles are in
            the water column or accumulate in seafloor sediments. These tiny
            particles are often only seen when water samples or collected
            sediments are viewed using a microscope.
          </p>
          <p>
            There is a distinct disparity in the composition of floating
            microplastics compared to those in the sediment layer. These
            differences suggest that composition and particle size may influence
            how microplastics are transported to the deeper marine environment.
            Understanding of how microplastics move in the marine environment is
            limited, primarily due to a scarcity of <em>in situ</em>{" "}
            measurements. The major obstacle to collecting such measurements of
            microplastics is an issue of scale &mdash; getting large enough
            water samples and small enough filtration resolution.
          </p>
          <p>
            The main objective of this research expedition in the Gulf of Panama
            was to investigate the vertical distribution of microplastics along
            the water column and to explore the processes governing how these
            pollutants sink to the seafloor. Conducting the research in the Gulf
            of Panama allowed the science team to collect samples in an
            understudied area of the Pacific Ocean, where nearly 6% of the
            global marine trade occurs.
          </p>
          <p>
            Led by Dr. Laura Simon S&aacute;nchez, this expedition&rsquo;s
            research contributions were critical to advancing <em>in situ</em>{" "}
            data collection by successfully using a novel piece of equipment
            called an AAU-UFO, built explicitly for studying microplastics,
            combined with the McLane large water pump. These measurements were
            compared against water samples collected by the ship&rsquo;s Niskin
            bottles from matching depths.
          </p>
          <p>
            Ultimately, researchers are{" "}
            <a href="https://www.youtube.com/watch?v=D5QFQ_7-RwQ&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=20" target="_blank" rel="noopener noreferrer">
              <u>
                building an essential picture of microplastic type and
                concentration{" "}
              </u>
            </a>{" "}
            across ocean depths and proximity to land. The novel data on the
            spatial distribution of sub-surface microplastics along the ship
            traffic area will help inform local authorities on the levels of
            microplastic pollution in the region, as well as the role of marine
            traffic as a potential source for some of these pollutants.
          </p>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>

          <h3>Resulting highlights include:</h3>
          <ul>
            <li>
              Collected microplastic samples off the coast of Panama, an
              important region for global marine trade and the second largest
              producer of plastic waste in Latin America.
            </li>
            <li>
              Documented the occurrence and distribution of small microplastics
              (&lt; 300 &micro;m &mdash; the length of a dust mite), providing
              new insight into how these pollutants are transported to the
              seafloor.
            </li>
            <li>
              Successfully conducted a comparison study of two different
              sampling methodologies, one using R/V{" "}
              <em>Falkor (too)&rsquo;s</em> CTD and rosette and a new technology,
              AAU-UFO, which uses a McLane large water pump, to identify the
              most effective and accurate technique for sampling microplastics
              in the Ocean.
            </li>
          </ul>
          <p>Permit to conduct research in Panama&rsquo;s waters: 170-23</p>

          <YoutubeVideo videoId="D5QFQ_7-RwQ" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default DynamicsOfSinkingMicroplastics;
