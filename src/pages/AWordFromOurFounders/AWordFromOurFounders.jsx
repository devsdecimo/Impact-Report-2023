import React from "react";
import Page from "../../components/Page/Page";
import IconWithText from "../../components/IconWithText/IconWithText";
import Ship from "/assets/images/ship.svg";
import Pin from "/assets/images/pin.svg";

function AWordFromOurFounders() {
  return (
    <Page
      title={<>A Word From Our <span className="big_text">Founders</span></>}
      header_image="/assets/images/a_word_from_our_founders/Header.webp"
    >
      <IconWithText className={'CTA'} icon={Pin} text={"San Juan, Puerto Rico"} opacity={1}></IconWithText>
      <IconWithText className={'CTA'} icon={Ship} numbers={34100} text={"sq km mapped "} opacity={0.9}></IconWithText>
      <IconWithText className={'CTA'} icon={Ship} text={"Without numbers"} opacity={1}></IconWithText>
      <h2>Content</h2>
    </Page>
  );
}

export default AWordFromOurFounders;
