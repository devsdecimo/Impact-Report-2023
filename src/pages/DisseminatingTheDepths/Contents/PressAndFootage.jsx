import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import DisseminatingTheDepths from "../DisseminatingTheDepths";

function PressAndFootage() {
  return (
    <DisseminatingTheDepths
      title={
        <img
          src="/assets/images/disseminating_the_depths/press_and_footage/Title.svg"
          alt="Press and Footage"
        />
      }
      header_image="/assets/images/disseminating_the_depths/press_and_footage//Header.webp"
      header_alt="Ben Tracy of CBS Mornings speaks with Co-founder Wendy Schmidt about the importance of the Ocean and the cutting-edge technology on the ship."
      footer_image="/assets/images/disseminating_the_depths/press_and_footage/Footer.webp"
      footer_alt="A Chief Officer oversees the deployment of a lander form the aft deck."
    >
      <BubbleImage
        image="/assets/images/disseminating_the_depths/press_and_footage/Press and Footage  -  FKt230812-RicardoStuartOutreachCall-20230901-Ingle-3776-APPROVED.webp"
        alt="Stuart Banks of the Charles Darwin Foundation on R/V Falkor (too)’s bridge during a ship-to-shore call."
        image2 = "/assets/images/disseminating_the_depths/press_and_footage/Times Square Bubble.webp"
        alt2="Deep sea scenes from SOI Galapagos expeditions play on the Nasdaq Exchange big screen in Times Square for New York Climate Week."
        className="press-image"
        direction="down"
      />
      <h3>Press and Footage</h3>
      <p>
        A year of discoveries led to extensive media coverage. Schmidt Ocean
        Institute published 13 press releases in 2023, resulting in more than
        4,000 news stories. Wendy Schmidt, co-founder and president of SOI, gave
        an interview on{" "}
        <a href="https://www.today.com/video/scientists-use-new-vessel-for-never-before-seen-look-in-deep-sea-170792517749" target="_blank" rel="noopener noreferrer">
          <u>The Today Show</u>
        </a>{" "}
        in April and had a sit-down with Ben Tracey onboard{" "}
        <em>Falkor (too)</em> for{" "}
        <a href="https://www.cbs.com/shows/video/YBqTWkkVaYdHYFCPIguiXXNrZeCXhldx/" target="_blank" rel="noopener noreferrer">
          <u>CBS Saturday Morning</u>
        </a>
        .
      </p>
      <p>
        Footage collected by ROV <em>SuBastian</em> was licensed 24 times and
        appeared in the second episode of BBC Planet Earth III. Our new Creative
        Commons licensing allowed thousands worldwide to download footage
        easily.
      </p>
      <p>
        A new collaboration with NASDAQ and the Charles Darwin Foundation led to
        a 10-minute video of footage from our Gal&aacute;pagos expeditions
        playing on the final day of New York Climate Week in Times Square.
      </p>
    </DisseminatingTheDepths>
  );
}

export default PressAndFootage;
