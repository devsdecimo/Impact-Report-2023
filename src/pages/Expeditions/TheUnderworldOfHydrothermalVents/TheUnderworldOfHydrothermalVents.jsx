import React from "react";
import Page from "../../../components/Page/Page";
import { PageContainer } from "../Expeditions.styles";
import SectionWithImage from "./SectionWithImage/SectionWithImage";
import SectionBrands from "./SectionBrands/SectionBrands";
import SectionIcons from "./SectionIcons/SectionIcons";
import Carousel from "../../../components/Carousel/Carousel";

import YoutubeVideo from "../../../components/YoutubeVideo/YouTubeVideo";
import ExpeditionsNav from "../ExpeditionsNav";
import headerImage from "/assets/images/expeditions/the_underworld_of_hydrothermal_vents/Header.webp";
import MapIframe from "../../../components/MapIframe/MapIframe";

function TheUnderworldOfHydrothermalVents() {
  const slidesPath = "/assets/images/expeditions/the_underworld_of_hydrothermal_vents/carousel/";
  const slides = [
    { img: `${slidesPath}01-DiscoveryBabyWormsInCrus.webp`, alt: "Monika Bright and Sabine Gollner do not hide their relief and happiness as they witness the results of their experiments." },
    { img: `${slidesPath}02-Bright_Sample.webp`, alt: "Monika Bright examines tubeworm larvae samples." },
    { img: `${slidesPath}03-ControlRoom.webp`, alt: "In the Control Room of R/V Falkor (too), Monika Bright and Andre Luiz de Oliveira document essential moments of their deep-sea experiments and observations." },
    { img: `${slidesPath}04-DiscoveryOfBabyWormsInCrust.webp`, alt: "Monika Bright, Sabine Gollner, and Stefan Sievert react as a large sample of crust is turned upside down, providing proof to the idea that animals disperse underground." },
    { img: `${slidesPath}05-RockSample_YoungTubeworms.webp`, alt: "A rock crust sample, upside down, reveals Oasisia and Riftia tubeworms, as well as other organisms." },
    { img: `${slidesPath}06-scitoo-dyeFill.webp`, alt: "Experiments, nick-named Mesh Box Staining Gadgets, are sealed to the seafloor at the Tica Vent, a site on the East Pacific Rise 2,500 meters deep." },
    { img: `${slidesPath}07-vulcanoctopus.webp`, alt: "A vulcanoctopus (a small benthic octopus endemic to hydrothermal vents) is seen near muscles and tubeworms near Tica Vent on the East Pacific Rise 2,500 meters deep. " },
  ];

  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/expeditions/the_underworld_of_hydrothermal_vents/Title.svg"
            alt="The Underworld Of Hydrothermal Vents"
          />
        }
        header_image={headerImage}
        header_alt="An upside-down rock crust sample reveals Oasisia and Riftia tubeworms; a strong argument in favor of Monika Bright's and Sabine Gollner's theory of species dispersal through cracks in the Earth's crust."
        footer_image="/assets/images/expeditions/the_underworld_of_hydrothermal_vents/Footer.webp"
        footer_alt="Experiments, nick-named Mesh Box Staining Gadgets, are sealed to the seafloor at the Tica Vent, a site on the East Pacific Rise 2,500 meters deep."
      >
        <SectionWithImage
          image="/assets/images/expeditions/the_underworld_of_hydrothermal_vents/Cientifica.webp"
          alt="Chief Scientist Dr. Monika Bright"
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
            Pacific Rise. ROV <em>SuBastian</em> pilots overturned volcanic crust
            to reveal cavities of lobate lava are teeming with worms, snails,
            and chemosynthetic bacteria in 23.9 degrees Celsius water.
          </p>
          <p>
            The team of scientists on R/V <em>Falkor (too)</em> set out to observe and
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
            Ultimately, this discovery transforms our current understanding of
            ecology and evolution of animal life at and beneath hydrothermal
            vents in the deep sea.
          </p>
          <YoutubeVideo videoId="E4_CCzfwKmw" />
          <YoutubeVideo videoId="neyccYHaAGo" />
          <MapIframe url="https://api.maptiler.com/maps/3dc91cd0-8f83-474a-bc3e-7ead4e7f322e/?key=egFVe2SmC2zBUYnGILbj#3.46/10.75/-101.25"/>
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default TheUnderworldOfHydrothermalVents;
