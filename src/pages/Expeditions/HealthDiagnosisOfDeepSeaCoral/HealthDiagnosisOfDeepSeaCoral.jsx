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

function HealthDiagnosisOfDeepSeaCoral() {
  const slidesPath = "/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/carousel/"
  const slides = [
    { img:  `${slidesPath}01-Reef_Solaris.webp`, href: "#", target: "_blank" },
    { img:  `${slidesPath}02-ShipToShoreCallWithUPRMstudents.webp`, href: "#", target: "_blank" },
    { img:  `${slidesPath}03-FirstDeploymentMissionControl.webp`, href: "#", target: "_blank" },
    { img:  `${slidesPath}04-FirstSampleRecovery.webp`, href: "#" },
    { img:  `${slidesPath}05-Light_coral.webp` },
    { img:  `${slidesPath}06-SOLARISIntegrationIntoROV.webp` },
    { img:  `${slidesPath}07-ProcessingSamplesInTheMainLab.webp` },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/Title.svg"
            alt="Health Diagnosis Of Deep Sea Coral"
          />
        }
        header_image="/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/Header.webp"
        footer_image="/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/Footer.webp"
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
                Explore the unknown waters surrounding Puerto Rico and assess
                the overall productivity, biodiversity, and health of deep-sea
                corals
              </li>
              <li>
                Integrate and use two newly designed instruments on ROV
                <em>SuBastian</em> for measuring reactive oxygen species, or
                ROS, in situ using an instrument called SOLARIS, and at shallow
                depths and in the lab using a DISCO device
              </li>
              <li>
                Evaluate ROS concentration and production in coral gardens that
                live along biogeochemical gradients and link to ecological,
                physiological, and evolutionary processes
              </li>
            </ul>
          </div>
          <div className="paragraph">
            <h3>Resulting highlights:</h3>
            <ul>
              <li>
                Researchers observed several corals and sponges not previously
                documented in the region, and they encountered an unexpectedly
                high density of corals in deep waters along Desecheo Ridge.
              </li>
              <li>
                Researchers detected a burst of the ROS hydrogen peroxide
                induced by wounding in a deep sea <em>Paramuricead</em>, which
                could be a mechanism for wound repair in this organism and
                provide a diagnostic indicator of stress.
              </li>
              <li>
                The science team made the first documented observation of
                extracellular ROS production by a black coral.
              </li>
            </ul>
          </div>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <div className="paragraph">
            <p>
              Corals play a foundational role in deep-sea ecosystems by
              providing habitats where invertebrate and fish communities can
              thrive. Corals produce extracellular reactive oxygen species, or
              ROS, which are short-lived oxygen-containing molecules. These
              molecules play an essential role in the health and ecological
              interactions of all living creatures, as they are needed for
              breaking down food, fighting off diseases, and healing wounds.
            </p>
            <p>
              Shallow corals produce ROS hydrogen peroxide, and researchers are
              determining if elevated signals of hydrogen peroxide can be
              reliably used as indicators of stress. There is a lack of ROS data
              for corals living in the deep sea; the mechanisms, role, and
              impacts of ROS production in deepwater corals are unknown.
            </p>
            <p>
              To determine if and how deep-sea corals produce ROS, a
              first-generation sensor called SOLARIS was integrated onto ROV{" "}
              <em>SuBastian</em>. SOLARIS is designed to measure ROS in corals
              in their natural environment. The new sensor was used to achieve
              the first systematic and targeted investigation of ROS production
              associated with deep-sea corals and provided essential insights
              into its controls on coral ecology, physiology, and health. The
              sensor was designed based on a handheld version developed by the
              expedition&rsquo;s Chief Scientist, Colleen Hansel; the
              development of DISCO was funded by Schmidt Marine Technology
              Partners.
            </p>
            <p>
              The team explored several locations in the waters of Puerto Rico
              with ROV
              <em>SuBastian,</em> including Whiting Bank, Desecheo Ridge, and
              Esperanza Ridge. Overall, the highest measured ROS levels were
              associated with an
              <em>Aplysina</em> sponge, possibly due to how the organism
              excretes fluid and disperses superoxides from within.
              Additionally, the team documented the first observation of
              extracellular ROS production by a black coral, which could help
              scientists better understand how these deep sea environments are
              reacting to changing oceanic conditions and human activity..
            </p>
            <p>
              Overall, 400 individuals comprising over 75 species of corals and
              sponges were measured, collected, and archived during the
              expedition. A fragment of each sample is archived in museums in
              Puerto Rico and the Smithsonian Institution. Following all
              analyses, the science team anticipates learning vital information
              about ROS concentration and production across depth gradients and
              among various corals in the waters of Puerto Rico. This new
              knowledge will inform the management of these critical ecosystems
              for years to come.
            </p>
          </div>
          <YoutubeVideo videoId="L7UwooHRrL0" />
          <div className="btn-container">
            <GeneralButton
              href="/expeditions/in_search_of_hydrothermal_lost_cities"
              icon={Prev}
              iconPosition="left"
              text="Previous Expedition"
            />
            <GeneralButton
              href="/expeditions/octopus_odyssey"
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

export default HealthDiagnosisOfDeepSeaCoral;
