import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import DisseminatingTheDepths from "../DisseminatingTheDepths";
import Carousel from "../../../components/Carousel/Carousel";

function CommunityBuilding() {
  const slides = [
    {
      img: "/assets/images/disseminating_the_depths/community_building/carousel/01-IvonneRodriguezTakesWaterSamplesFromSubastian.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/community_building/carousel/02-PreDiveMainLabMobilisation.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/community_building/carousel/03-FirstCTDDeployment.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/community_building/carousel/04-Ashleigh-Naranjo_Aguilar.webp",
    },
    {
      img: "/assets/images/disseminating_the_depths/community_building/carousel/05-ShipToShoreCallCostaRica.webp",
    },
  ];

  return (
    <DisseminatingTheDepths
      title={
        <img
          src="/assets/images/disseminating_the_depths/community_building/Title.svg"
          alt="Community Building"
        />
      }
      header_image="/assets/images/disseminating_the_depths/community_building//Header.webp"
      header_alt="Researchers examine a water sample under a microscope in R/V Falkor (too)’s main lab."
      footer_image="/assets/images/disseminating_the_depths/community_building/Footer.webp"
      footer_alt="Partnership participants are given a tour of R/V Falkor (too)."
    >
      <BubbleImage
        image="/assets/images/disseminating_the_depths/community_building/Community Building.webp"
        className="community-image"
        direction="up"
        alt="(L-R) Audrey Siegel (Video Producer, Vogue China), Taiwanese designer Pei-Wen Jin (Artist-at-Sea), and Professor Monika Aggarwal from IIT Delhi (partnership with IEEE-OES), tour Falkor (too)'s hangar during the Dynamics of Sinking Microplastics expedition."
      />
      <h3>Commmunity Building</h3>
      <p>
        This year, Schmidt Ocean Institute introduced a new Berth of Opportunity
        program to engage people from the region where R/V <em>Falkor (too)</em>{" "}
        is operating with ocean exploration and science at sea. Participation is
        open to people with a range of skills and expertise &mdash; students,
        traditional environmental knowledge holders, storytellers, local
        resource managers, SOI partners, and more. Providing a berth to someone
        who may not have experienced a full-scale scientific expedition promotes
        sharing new perspectives and ideas, encouraging a reciprocal knowledge
        exchange between the scientists and the participants.
      </p>
      <p>
        Seven people participated in the program in 2023, six of whom are
        residents of the Latin American country where expeditions took place.
        Four participants were Latin American students, two were Costa Rican
        marine resource managers, and one represented an SOI partner. Berth of
        Opportunity participants described their experiences as unforgettable
        and enriching, deepening their ocean understanding and advancing their
        career pathways in ocean science fields.
      </p>

      <Carousel slides={slides} className="artist-sea-carousel" />
    </DisseminatingTheDepths>
  );
}

export default CommunityBuilding;
