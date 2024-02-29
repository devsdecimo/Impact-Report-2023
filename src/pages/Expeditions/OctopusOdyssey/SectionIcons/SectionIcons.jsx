import React from "react";
import { SectionIconsContainer } from "./SectionIcons.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Auv from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/auv.svg";
import Casts from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/casts.svg";
import Days from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/days.svg";
import Dives from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/dives.svg";
import Map from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/map.svg";
import Samples from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/samples.svg";
import Travel from "/assets/images/in_search_of_hydrothermal_lost_cities/icons/travel.svg";

function SectionIcons() {
  return (
    <SectionIconsContainer>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Days}
          numbers="54"
          text={"science days"}
          opacity={0.8}
        />
        <IconWithText
          className={"CTA"}
          icon={Map}
          numbers="1184"
          numbers2="53"
          separator="."
          text={"sq km mapped"}
          opacity={0.8}
        />
      </div>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Travel}
          numbers="8938"
          numbers2="6"
          separator="."
          text={"km traveled"}
          opacity={0.8}
        />
        <IconWithText
          className={"CTA"}
          icon={Casts}
          numbers="23"
          text={"CTD casts"}
          opacity={0.8}
        />
      </div>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Dives}
          numbers="42"
          text={"ROV dives"}
          opacity={0.8}
        />
        <IconWithText
          className={"CTA"}
          icon={Samples}
          numbers="661"
          text={"ROV samples collected"}
          opacity={0.8}
        />
      </div>
    </SectionIconsContainer>
  );
}

export default SectionIcons;
