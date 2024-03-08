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

function TheUnderworldOfHydrothermalVents() {
  const slidesPath = "/assets/images/expeditions/the_underworld_of_hydrothermal_vents/carousel/";
  const slides = [
    { img: `${slidesPath}01-DiscoveryBabyWormsInCrus.webp` },
    { img: `${slidesPath}02-Bright_Sample.webp` },
    { img: `${slidesPath}03-ControlRoom.webp` },
    { img: `${slidesPath}04-DiscoveryOfBabyWormsInCrust.webp` },
    { img: `${slidesPath}05-RockSample_YoungTubeworms.webp` },
    { img: `${slidesPath}06-scitoo-dyeFill.webp` },
    { img: `${slidesPath}07-vulcanoctopus.webp` },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/the_underworld_of_hydrothermal_vents/Title.svg"
            alt="Health Diagnosis Of Deep Sea Coral"
          />
        }
        header_image="/assets/images/expeditions/the_underworld_of_hydrothermal_vents/Header.webp"
        footer_image="/assets/images/expeditions/the_underworld_of_hydrothermal_vents/Footer.webp"
      >
        <SectionWithImage
          image="/assets/images/expeditions/the_underworld_of_hydrothermal_vents/FKt230629.webp"
          alt="Dr. Monika Bright"
        />
        <SectionBrands />
        <div className="content">
          <SectionIcons />
          <h3>Expedition objectives:</h3>
          <ul>
            <li>
              Describe biosphere diversity beneath deep-sea hydrothermal
              vents —from microbes to animals
            </li>
            <li>
              Clarify the nature and extent of connectivity between
              biospheres at and below these vent systems
            </li>
            <li>
              Test the hypothesis that the larvae of some hydrothermal
              species travel through vent fluid in subsurface
              environments to colonize new vent structures
            </li>
          </ul>
          <h3>Resulting highlights:</h3>
          <ul>
            <li>
              The international science team discovered deep-sea habitats teeming
              with life  in volcanic cavities beneath the ocean floor; the discovery
              adds a new dimension to hydrothermal vents, showing that their
              habitats exist both above and below the seafloor.
            </li>
            <li>
              Scientists believe they have discovered four new octopus species
              during the Octopus Odyssey and Octopus Odyssey (too) expeditions.
            </li>
            <li>
              Researchers found evidence of vent animals, like tubeworms,
              traveling underneath the seafloor through vent fluid to colonize new habitats.
            </li>
            <li>
              The science team completed broad sampling of sea water, vent fluid, rocks,
              and microbial and animal communities above and below vents; these samples
              will allow scientists to assess the connection between communities living
              at and below these vent systems.
            </li>
          </ul>
          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <p>
            A new ecosystem was discovered in the form of small, shallow cavities
            beneath hydrothermal vents at a deep sea volcano on the East
            Pacific Rise. ROV SuBastian pilots overturned volcanic crust
            to reveal cavities of lobate lava are teeming with worms, snails,
            and chemosynthetic bacteria in 23.9 degrees Celsius water.
          </p>
          <p>
            The team of scientists on R/V Falkor (too) set out to observe and
            describe the diversity of life beneath deep-sea hydrothermal vents.
            They validated their hypotheses that (1) eukaryotic life is an
            integral component of habitats below hydrothermal vents, (2) the
            subseafloor is inhabited by both cosmopolitan and endemic
            protists and fungi, and (3) the subseafloor habitats harbor
            larvae (and perhaps adult life stages) of animals from vent communities.
          </p>
          <p>
            Two dynamic vent habitats exist—vent animals above and below the
            surface—and these habitats thrive together, depending on vent fluid
            from below and oxygen in the seawater from above. A broad sampling
            scheme of seawater, vent fluid, rocks, and microbial and animal
            communities above and below vents will allow the scientists to
            assess the connection between these communities upon data and
            sample analysis in the upcoming months.
          </p>
          <p>
            Scientists believe they have discovered four new octopus species
            during the two expeditions; these discoveries will go through a
            rigorous analysis process to be confirmed and published in the
            coming months. One octopus may be a new species of{" "}
            <em>Muusoctopus</em>, which was the only one observed brooding their
            eggs on low-temperature hydrothermal vents; this adds to the
            hypothesis that only the <em>Muusoctopus </em>genus has evolved to
            brood their eggs in warm springs on the seafloor.
          </p>
          <p>
            Ultimately, this discovery transforms our current understanding of
            ecology and evolution of animal life at and beneath hydrothermal
            vents in the deep sea.
          </p>
          <YoutubeVideo videoId="E4_CCzfwKmw" />
          <YoutubeVideo videoId="neyccYHaAGo" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default TheUnderworldOfHydrothermalVents;
