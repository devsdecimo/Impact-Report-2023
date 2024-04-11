import React from "react";
import { SectionIconsContainer } from "./SectionIcons.styles";
import IconWithText from "../../../../components/IconWithText/IconWithText";
import Auv from "/assets/images/icons/auv.svg";
import Casts from "/assets/images/icons/casts.svg";
import Days from "/assets/images/icons/days.svg";
import Dives from "/assets/images/icons/dives.svg";
import Map from "/assets/images/icons/map.svg";
import Data from "/assets/images/icons/data.svg";
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
          opacity={1}
        />
         <IconWithText
          className={"CTA"}
          icon={Map}
          numbers="900"
          text={"sq km mapped"}
          opacity={1}
        />
      </div>
      <div className="columna">
        <IconWithText
          className={"CTA"}
          icon={Data}
          separator="."
          numbers2="03"
          text={"terabytes of data collected"}
          opacity={1}
        />
        <IconWithText
          className={"CTA"}
          icon={Casts}
          numbers="16"
          text={"CTD casts"}
          opacity={1}
        />
      </div>
      <div className="columna">
      <IconWithText
          className={"CTA"}
          icon={Sea}
          textBefore="~"
          numbers="55000"
          text={"liters of seawater filtered"}
          opacity={1}
        />
      </div>
    </SectionIconsContainer>
  );
}

export default SectionIcons;
