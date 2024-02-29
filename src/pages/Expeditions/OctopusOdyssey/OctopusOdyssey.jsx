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

function OctopusOdyssey() {
  const slidesPath =
    "/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/carousel/";
  const slides = [
    { img: `${slidesPath}01-Reef_Solaris.webp`, href: "#", target: "_blank" },
    {
      img: `${slidesPath}02-ShipToShoreCallWithUPRMstudents.webp`,
      href: "#",
      target: "_blank",
    },
    {
      img: `${slidesPath}03-FirstDeploymentMissionControl.webp`,
      href: "#",
      target: "_blank",
    },
    { img: `${slidesPath}04-FirstSampleRecovery.webp`, href: "#" },
    { img: `${slidesPath}05-Light_coral.webp` },
    { img: `${slidesPath}06-SOLARISIntegrationIntoROV.webp` },
    { img: `${slidesPath}07-ProcessingSamplesInTheMainLab.webp` },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/octopus_odyssey/Title.svg"
            alt="Health Diagnosis Of Deep Sea Coral"
          />
        }
        header_image="/assets/images/expeditions/octopus_odyssey/Header.webp"
        footer_image="/assets/images/expeditions/octopus_odyssey/Footer.webp"
      >
        <div className="content">
          <SectionWithImage
            image="/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/FKt230417.webp"
            alt="Dr. Colleen Hansel"
          />
          <SectionBrands />
          <SectionIcons />
          <div className="paragraph">
            <h3>Expedition objectives:</h3>
            <ul>
              <li>
                Determine if octopuses are brooding their eggs in warm water at
                hydrothermal vents at the Dorado Outcrop
              </li>
              <li>
                Find linkages between fluid-rock alteration, microbial
                processes, and microbe-animal symbiosis at seamounts in Costa
                Rica, as well as to broader seafloor-ocean coupling
              </li>
              <li>
                Provide hands-on training for shipboard early career scientists
                and build capacity sharing with scientists from Latin American
                and Caribbean Countries
              </li>
              <li>
                Return in December to collect new samples and retrieve
                experiments placed on the seafloor in June of 2023
              </li>
            </ul>
          </div>
          <div className="paragraph">
            <h3>Resulting highlights:</h3>
            <ul>
              <li>
                The team confirmed the Dorado Outcrop in Costa Rica&rsquo;s
                Pacific waters hosts a year-round octopus nursery with hundreds
                of
                <em>Muusoctopus</em> brooding viable eggs in low-temperature
                hydrothermal fluids.
              </li>
              <li>
                Scientists believe they have discovered four new octopus species
                during the Octopus Odyssey and Octopus Odyssey (too)
                expeditions.
              </li>
              <li>
                Researchers observed a variety of octopus behaviors and
                carefully collected specimens to allow for identification, and
                the study of population biology and animal microbiomes.
              </li>
              <li>
                The team located a thriving deep-sea skate nursery on top of
                Tengosed Seamount in Costa Rican waters and nicknamed it The
                Skate Park.
              </li>
            </ul>
          </div>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <div className="paragraph">
            <p>
              In June 2023, Co-chief Scientists Drs. Beth Orcutt and Jorge
              Cort&eacute;s led an international team to map and examine the
              Dorado Outcrop &mdash; Earth&rsquo;s first-ever discovered octopus
              nursery. One of their initial goals was to determine if the eggs
              at the nursery were viable, as past expeditions to the outcrop had
              never seen evidence of developing embryos.
            </p>
            <p>
              The team documented nurseries with hundreds of{" "}
              <em>Muusoctopus </em>species brooding viable eggs in
              low-temperature hydrothermal fluids at the Dorado Outcrop, the
              first octopus garden scientists have ever observed. They were
              amazed by how quickly predators like shrimp and cutthroat eels
              descended on any unprotected eggs. The predation observations
              demonstrate how well a mother octopus protects their eggs during
              the brooding period. Scientists witnessed spectacular scenes of
              the first moments of life, as baby octopuses emerged from their
              eggs. ROV <em>SuBastian</em> was able to follow one hatchling for
              an epic journey over 150 m up into the water column.
            </p>
            <p>
              In December, the team returned to further study the nurseries,
              examine parts of the seafloor never-before-seen by humans, and
              collect experiments placed on the seafloor in June. One of the
              most substantial findings from the expedition is the confirmation
              that <em>Muusoctopus</em> nurseries offshore of Costa Rica support
              baby octopuses throughout the year and not just during the rainy
              season.
            </p>
            <p>
              Scientists believe they have discovered four new octopus species
              during the two expeditions; these discoveries will go through a
              rigorous analysis process to be confirmed and published in the
              coming months. One octopus may be a new species of{" "}
              <em>Muusoctopus</em>, which was the only one observed brooding
              their eggs on low-temperature hydrothermal vents; this adds to the
              hypothesis that only the <em>Muusoctopus </em>genus has evolved to
              brood their eggs in warm springs on the seafloor.
            </p>
            <p>
              Three different kinds of low-temperature hydrothermal vents were
              detected, all of which sustain ecosystems teeming with life on the
              seafloor. This discovery was highlighted by the presence of a
              thriving deep-sea skate nursery, nicknamed The Skate Park, found
              at the top of the Tengosed Seamount. The skate eggs also sit in
              low-temperature hydrothermal vents, but the temperature and fluid
              chemistry differ from Dorado Outcrop's warm springs. The Pacific
              white skate is one of the deepest living skate species, and the
              association of their nurseries with local hydrothermal venting is
              currently being investigated.
            </p>
            <p>
              The observed deep-sea octopus and skate nurseries exhibit all of
              the characteristics of{" "}
              <a href="https://www.fao.org/in-action/vulnerable-marine-ecosystems/definitions/en/">
                Vulnerable Marine Ecosystems
              </a>{" "}
              and{" "}
              <a href="https://gobi.org/ebsas/">
                Ecologically and Biologically Sensitive Areas
              </a>{" "}
              because: they are required for the survival of these populations,
              home to sensitive species slow to recover from disturbance, have
              high productivity, and are relatively pristine. Seamount
              ecosystems support highly diverse animal communities on the
              seafloor and the surrounding Ocean, yet the diversity,
              connectivity, and ecosystem services of these environments are
              poorly understood. Detailed studies like those that will result
              from these expeditions will impact policy and aid in crafting
              effective conservation management and protection plans, and
              dual-language outreach helped raise awareness among Costa Rican
              and regional audiences.
            </p>
            <p>
              Over{" "}
              <a href="https://youtu.be/JYMaz6AW7f0?feature=shared">
                160 deep-sea animal specimens
              </a>{" "}
              collected from these expeditions will be stored at the Museum of
              Zoology at the University of Costa Rica. The collection marks one
              of the first times that all biological specimens will be housed
              within the Latin American country from which they were collected.
              Housing the collection locally will enable local scientists,
              students, and the general public to engage and connect with life
              in the abundant waters that comprise over 92% of Costa
              Rica&rsquo;s territory, and may lead to informing future marine
              protections in the region.
            </p>
          </div>
          <YoutubeVideo videoId="U5jo9IhO8NA" />
          <YoutubeVideo videoId="JYMaz6AW7f0" />
          <div className="btn-container">
            <GeneralButton
              href="/expeditions/health_diagnosis_of_deep_sea_coral"
              icon={Prev}
              iconPosition="left"
              text="Previous Expedition"
            />
            <GeneralButton
              href="#"
              icon={Next}
              iconPosition="right"
              text="Next Expedition"
            />
          </div>
        </div>
      </Page>
    </PageContainer>
  );
}

export default OctopusOdyssey;
