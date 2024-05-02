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
  const slidesPath =
    "/assets/images/expeditions/the_underworld_of_hydrothermal_vents/carousel/";
  const slides = [
    {
      img: `${slidesPath}01-DiscoveryBabyWormsInCrus.webp`,
      alt: "Monika Bright and Sabine Gollner do not hide their relief and happiness as they witness the results of their experiments.",
    },
    {
      img: `${slidesPath}02-Bright_Sample.webp`,
      alt: "Monika Bright examines tubeworm larvae samples.",
    },
    {
      img: `${slidesPath}03-ControlRoom.webp`,
      alt: "In the Control Room of R/V Falkor (too), Monika Bright and Andre Luiz de Oliveira document essential moments of their deep-sea experiments and observations.",
    },
    {
      img: `${slidesPath}04-DiscoveryOfBabyWormsInCrust.webp`,
      alt: "Monika Bright, Sabine Gollner, and Stefan Sievert react as a large sample of crust is turned upside down, providing proof to the idea that animals disperse underground.",
    },
    {
      img: `${slidesPath}05-RockSample_YoungTubeworms.webp`,
      alt: "A rock crust sample, upside down, reveals Oasisia and Riftia tubeworms, as well as other organisms.",
    },
    {
      img: `${slidesPath}06-scitoo-dyeFill.webp`,
      alt: "Experiments, nick-named Mesh Box Staining Gadgets, are sealed to the seafloor at the Tica Vent, a site on the East Pacific Rise 2,500 meters deep.",
    },
    {
      img: `${slidesPath}07-vulcanoctopus.webp`,
      alt: "A vulcanoctopus (a small benthic octopus endemic to hydrothermal vents) is seen near muscles and tubeworms near Tica Vent on the East Pacific Rise 2,500 meters deep. ",
    },
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
              Describe biosphere diversity beneath deep-sea hydrothermal vents from microbes to animals.
            </li>
            <li>
              Clarify the nature and extent of connectivity between biospheres
              at and below vent systems.
            </li>
            <li>
              Test the hypothesis that the larvae of some species living at
              hydrothermal vents travel through vent fluid in subsurface
              environments to colonize new vent structures.
            </li>
          </ul>

          <p>
            Led by Dr. Monika Bright, an international team of scientists on R/V{" "}
            <em>Falkor (too)</em>{" "}set out to discover, observe, and document the
            diversity of life living beneath deep-sea hydrothermal vents. They
            suspected that these ecosystems existed beneath the seafloor, and
            water being sucked into and pumped out of cracks in the surrounding
            seafloor and vents could be a mechanism for building new
            hydrothermal vents. The scientists also thought these subseafloor
            ecosystems could facilitate the conditions for life dwelling on the
            vents by spreading animal larvae and adults, and microbial
            communities between vent fields.
          </p>
          <p>
            Hydrothermal vents are dynamic ecosystems prone to regular
            disturbances like volcanic eruptions and earthquakes. Some
            hydrothermal vents have brief lifespans, appearing and then becoming
            inactive over a few years. Yet, wherever a hydrothermal vent forms,
            a biological community almost always follows, and how these animals
            arrive at the vents had yet to be determined. In the deep Ocean,
            maintaining the genetic diversity of a population happens by
            dispersing larvae via currents, wind, and waves to send the
            organism&rsquo;s larvae far away from the parents. Scientists have
            plentiful evidence that hydrothermal animals are reproducing, though
            some species have rarely been detected in the surrounding water. To
            these researchers, the evidence suggested that hydrothermal animals
            may not rely only on the open Ocean to disperse their young.
          </p>
          <p>
            Bright and her team suspected that these mechanisms were taking
            place beneath the surface and set out to resolve this mystery. They{" "}
            <a href="https://www.youtube.com/watch?v=M7oqvMZriEc&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=22">
              <u>deployed several experiments</u>
            </a>
            , including a newly designed{" "}
            <a href="https://www.youtube.com/watch?v=lLo09UflWaQ&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=23">
              <u>mesh box&ndash;staining gadget</u>
            </a>{" "}
            used at tubeworm clumps to study which animals and microbes are
            flushed out from the subsurface. When these experiments failed to
            reveal life beneath the surface, pilots used the ROV{" "}
            <em>SuBastian&rsquo;s</em> manipulators to break open and overturn a
            section of the seafloor. When the rocky substrate was overturned,
            they made a discovery akin to finding life on another planet.
            They revealed cavities of lobate lava packed with worms, snails, and
            chemosynthetic bacteria living in the 23.9 degrees Celsius water. It
            was an entirely new ecosystem!
          </p>
          <p>
            The team proved that two dynamic vent habitats exist. Vent animals
            above and below the surface thrive together in unison, both
            depending on vent fluid from below and oxygen in the seawater from
            above. Analysis of samples collected from above and below the vents
            will allow the scientists to assess the connection between these
            communities.
          </p>
          <p>
            Ultimately, this discovery transforms our scientific understanding
            of ecology and the evolution of animal life at and beneath
            hydrothermal vents in the deep sea. For{" "}
            <a href="https://www.youtube.com/watch?v=E4_CCzfwKmw&amp;list=PLJGVqQI3okzZsZYBgPx5DqEYTQZLR2CfH&amp;index=21">
              <u>the researchers</u>
            </a>
            , this new knowledge is a reminder that conservation and protection
            must include what we see on the surface <em>and</em> what is living
            below.
          </p>

          <Carousel slides={slides} className="expedition-carousel"></Carousel>
          <h3>Resulting highlights include:</h3>
          <ul>
            <li>
              Discovered an entirely new ecosystem brimming with animal life in
              volcanic cavities beneath the ocean floor.
            </li>
            <li>
              Documented an otherworldly community of vent animals traveling
              beneath the seafloor through vents to establish new habitats in
              other vent systems.
            </li>
            <li>
              Opened up a new field of scientific study &mdash; adding a new
              dimension to hydrothermal vent habitats with animals living below
              the seafloor &mdash; that will result in revised models of
              hydrothermal vent ecosystems.
            </li>
          </ul>
          <YoutubeVideo videoId="E4_CCzfwKmw" />
          <YoutubeVideo videoId="neyccYHaAGo" />
          <MapIframe url="https://api.maptiler.com/maps/3dc91cd0-8f83-474a-bc3e-7ead4e7f322e/?key=egFVe2SmC2zBUYnGILbj#3.46/10.75/-101.25" />
          <ExpeditionsNav />
        </div>
      </Page>
    </PageContainer>
  );
}

export default TheUnderworldOfHydrothermalVents;
