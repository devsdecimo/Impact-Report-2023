import React from "react";
import { SectionIconsContainer } from "./SectionIcons.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Auv from "/assets/images/icons/auv.svg";
import Casts from "/assets/images/icons/casts.svg";
import Days from "/assets/images/icons/days.svg";
import Dives from "/assets/images/icons/dives.svg";
import Map from "/assets/images/icons/map.svg";
import Samples from "/assets/images/icons/samples.svg";
import Travel from "/assets/images/icons/travel.svg";

function SectionIcons() {
  return (
    <SectionIconsContainer>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Days}
          numbers="32"
          text={"science days"}
          opacity={1}
        />
        <IconWithText
          className={"CTA"}
          icon={Map}
          numbers="18226"
          text={"sq km mapped"}
          opacity={1}
        />
      </div>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Travel}
          numbers="4261"
          numbers2="1"
          separator="."
          text={"km traveled"}
          opacity={1}
        />
        <IconWithText
          className={"CTA"}
          icon={Casts}
          numbers="6"
          text={"CTD casts"}
          opacity={1}
        />
      </div>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Dives}
          numbers="15"
          text={"ROV dives"}
          opacity={1}
        />
        <IconWithText
          className={"CTA"}
          icon={Samples}
          numbers="457"
          text={"ROV samples collected"}
          opacity={1}
        />
      </div>
    </SectionIconsContainer>
  );
}

export default SectionIcons;
