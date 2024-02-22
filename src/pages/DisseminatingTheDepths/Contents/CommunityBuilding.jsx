import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";

function CommunityBuilding({ children }) {
  return (
    <>
      <p>
        This year, SOI introduced a new Berth of Opportunity program to engage
        people from the region where R/V <em>Falkor (too)</em> is operating with
        ocean exploration and science at sea. Participation is open to people
        with a range of skills and expertise &mdash; 
        <BubbleImage image="/assets/images/disseminating_the_depths/ShanHuaArtistAtSea.webp" className="community-image" direction="up"/>
        students, cultural
        practitioners, storytellers, local resource managers, SOI partners, and
        more. Providing a berth to someone who may not have experienced a
        full-scale scientific expedition promotes sharing new perspectives and
        ideas, encouraging a reciprocal knowledge exchange between the
        scientists and the participants.
      </p>
      <p>
        Seven people participated in the program in 2023, six of whom are
        residents of the Latin American country where expeditions were taking
        place. Four participants were Latin American students, two were Costa
        Rican marine resource managers, and one represented an SOI partner.
        Berth of Opportunity participants described their experiences as
        unforgettable and enriching, deepening their ocean understanding and
        advancing their career pathways in ocean science fields.
      </p>
    </>
  );
}

export default CommunityBuilding;
