import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";
import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";
import headerImage from "/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/Header.webp";
import MapIframe from "../../../components/MapIframe/MapIframe";

function HealthDiagnosisOfDeepSeaCoral() {
  const slidesPath =
    "/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/carousel/";
  const slides = [
    {
      img: `${slidesPath}01-Reef_Solaris.webp`,
      alt: "The developmental chemical sensor (SOLARIS) is used underwater to make measurements of a fleetingly scarce compound called superoxide, a reactive oxygen species.",
    },
    {
      img: `${slidesPath}02-ShipToShoreCallWithUPRMstudents.webp`,
      alt: "Cathrine Hernandez Rodriguez (MS Student, University of Puerto Rico) gives a live ship-to-shore call, taking students on a tour of R/V Falkor (too)'s labs.",
    },
    {
      img: `${slidesPath}03-FirstDeploymentMissionControl.webp`,
      alt: "Marine Technician Julianna Diehl works in Mission Control during the first dive of the Health Diagnostics of Deep-Sea Coral Expedition.",
    },
    {
      img: `${slidesPath}04-FirstSampleRecovery.webp`,
      alt: "A sample of Sargassum on ROV SuBastian.",
    },
    {
      img: `${slidesPath}05-Light_coral.webp`,
      alt: "Some dives during the expedition took place at shallower depths, where ambient light is available.",
    },
    {
      img: `${slidesPath}06-SOLARISIntegrationIntoROV.webp`,
      alt: "In the hangar, scientists calibrate the SOLARIS sensor system that has been attached to the vehicle.",
    },
    {
      img: `${slidesPath}07-ProcessingSamplesInTheMainLab.webp`,
      alt: "In R/V Falkor (too)'s main lab, Jeremy Horowitz (Postdoc, Smithsonian Institution) photographs coral samples before preserving and sealing them.",
    },
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
        header_image={headerImage}
        header_alt="A piece of coral is removed from one of ROV SuBastian's bio boxes and placed into water for transportation to the lab."
        footer_image="/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/Footer.webp"
        footer_alt="Corallium off the coast of Puerto Rico."
      >
        <SectionWithImage
          image="/assets/images/expeditions/health_diagnosis_of_deep_sea_coral/Colleen.webp"
          alt="Chief Scientist Dr. Colleen Hansel"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Explore the waters surrounding Puerto Rico and assess the overall
              productivity, biodiversity, and health of deep-sea corals.
            </li>
            <li>
              Test two newly designed instruments for measuring reactive oxygen
              species called ROS <em>in situ</em> &mdash; a device called DISCO,
              which stands for Diver-operated Submersible Chemiluminescent
              Sensor, for shallow depths and lab measurements, and an instrument
              mounted on ROV <em>SuBastian</em> for deeper depths called
              SOLARIS, which stands for Submersible Oceanic Luminescent Analyzer
              of Reactive Intermediate Species.
            </li>
            <li>
              Evaluate ROS concentration and production in coral gardens that
              live along biogeochemical gradients and link them to ecological,
              physiological, and evolutionary processes.
            </li>
          </ul>

          <p>
            Corals play a foundational role in deep-sea ecosystems by providing
            habitats where invertebrate and fish communities can thrive. Corals
            produce extracellular{" "}
            <a href="https://www.youtube.com/watch?v=svYFr892fGQ&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=29">
              <u>reactive oxygen species called ROS,</u>
            </a>{" "}
            which are short-lived oxygen-containing molecules. These molecules
            play an essential role in all living creatures' health and
            ecological interactions, as they are needed for breaking down food,
            fighting off diseases, and healing wounds.
          </p>
          <p>
            Previous research by the{" "}
            <a href="https://www2.whoi.edu/site/hansel-lab/">
              <u>Hansel Lab</u>
            </a>{" "}
            demonstrated that shallow corals produce the ROS hydrogen peroxide.
            In April of 2023, Chief Scientist Dr. Colleen Hansel led a team of
            scientists and engineers to investigate whether the detection of
            elevated hydrogen peroxide signals can be used as an indicator of
            coral stress. While scientists have been able to study corals in
            shallow waters, there is a lack of ROS data for deep-sea corals
            because of their inaccessibility in the deep Ocean. The science team
            is working to understand the mechanisms, role, and impacts of ROS
            production in deep-sea corals, and this expedition brought
            researchers closer to bridging the data gap.
          </p>
          <p>
            ROS must be studied <em>in situ. </em>Collecting samples for lab
            analysis will not work because the molecules are unstable and react
            almost instantly with other molecules, vanishing in about 30
            seconds. To determine if and how deep-sea corals produce ROS,{" "}
            <a href="https://www.youtube.com/watch?v=7rPfn6T4gLo&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=28">
              <u>a novel sensor called SOLARIS</u>
            </a>{" "}
            was integrated into ROV <em>SuBastian</em>. SOLARIS was designed to
            measure ROS in the water and at depth &mdash; deep-sea corals&rsquo;
            natural environment.
          </p>
          <p>
            The new sensor was used to conduct the first systematic and targeted
            investigation of ROS production associated with deep-sea corals.
            SOLARIS provided essential data on coral stress, which led
            scientists to gain new insights into how ROS influences coral
            ecology, physiology, and health. The sensor design was based on a
            handheld version, DISCO. Hansel and a Woods Hole Oceanographic
            Institution team developed{" "}
            <a href="https://www.whoi.edu/oceanus/feature/a-disco-in-the-ocean/">
              <u>both devices</u>
            </a>
            , and{" "}
            <a href="https://schmidtmarine.org/">
              <u>Schmidt Marine Technology Partners</u>
            </a>{" "}
            funded DISCO.
          </p>
          <p>
            The science team explored several locations in the waters off Puerto
            Rico with ROV{" "}<em>SuBastian,</em>{" "}including Whiting Bank, Desecheo
            Ridge, and Esperanza Ridge. They successfully measured high ROS
            levels for an{" "}
            <em>Aplysina</em>{" "}sponge and documented the first observation of
            extracellular ROS production by a black coral. This information
            could help scientists better understand how these deep-sea corals
            are reacting to human activity and changing ocean conditions.
          </p>
          <p>
            The researchers found that this area of Puerto Rico &mdash; with
            fewer nutrients in the water column &mdash; has corals managing to
            survive and proliferate.{" "}
            <a href="https://www.youtube.com/watch?v=L7UwooHRrL0&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=28">
              <u>To Hansel</u>
            </a>
            , this has the potential to open up a whole new area of science
            because the corals in Puerto Rico are completely different from what
            they've seen elsewhere. The ability of corals to thrive despite the
            availability of nutrients raises exciting new questions about how
            corals may allocate energy resources in relation to their
            surroundings. Following analyses, scientists expect to learn about
            the biogeochemistry of deep-sea corals living in Puerto Rican
            waters, which will inform the management of these ecosystems for
            years.
          </p>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <h3>Resulting highlights include:</h3>
          <ul>
            <li>
              Encountering a lush forest of deep-sea corals and associated
              animals living along Desecheo Ridge; the team also observed
              several corals and sponges not previously documented in the
              region, expanding the knowledge of what exists there.
            </li>
            <li>
              Detected a burst of ROS hydrogen peroxide in a wounded deep-sea{" "}
              <em>Paramuricead</em>,{" "}a genus of Gorgonian-type octocorals, which
              could be a mechanism for repairing wounds; this also provided a
              diagnostic indicator of stress.
            </li>
            <li>
              First documented observation of extracellular ROS production by a
              black coral.
            </li>
            <li>
              Two new ROV-based instruments, SOLARIS and DISCO, were
              successfully used; these chemiluminescent detectors for measuring
              reactive oxygen species{" "}
              <em>in situ</em>{" "}help scientists bridge a data gap about deep-sea
              corals and their responses to stress.
            </li>
          </ul>
          <p>
            Permit to conduct research in Puerto Rican waters: 2023-IC-019
            (O-VS-PVS15-SJ-01351-01022023)
          </p>
          <YoutubeVideo videoId="L7UwooHRrL0" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default HealthDiagnosisOfDeepSeaCoral;
