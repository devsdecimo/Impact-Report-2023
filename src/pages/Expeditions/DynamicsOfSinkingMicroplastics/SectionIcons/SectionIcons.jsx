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
import Sea from "/assets/images/icons/sea.svg";

function SectionIcons() {
  return (
    <SectionIconsContainer>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Days}
          numbers="5"
          text={"science days"}
          opacity={0.8}
        />
      </div>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Travel}
          numbers="500"
          text={"km traveled"}
          opacity={0.8}
        />
        <IconWithText
          className={"CTA"}
          icon={Casts}
          numbers="16"
          text={"CTD casts"}
          opacity={0.8}
        />
      </div>
      <div className="columna">
      <IconWithText
          className={"CTA"}
          icon={Sea}
          textBefore="~"
          numbers="55000"
          text={"liters of seawater filtered"}
          opacity={0.8}
        />
      </div>
    </SectionIconsContainer>
  );
}

export default SectionIcons;
