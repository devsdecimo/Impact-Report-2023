import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";

function PressAndFootage({ children }) {
  return (
    <>
      <h3>
        <strong>Press and Footage</strong>
      </h3>
      <p>
        A year of discoveries led to a plethora of media coverage. SOI published
        13 press releases in 2023, citing 13 findings and resulting in more than
        4,000 new stories. Of note was co-founder and president Wendy
        Schmidt&rsquo;s interview on{" "}
        <a href="https://www.today.com/video/scientists-use-new-vessel-for-never-before-seen-look-in-deep-sea-170792517749">
          The Today Show
        </a>{" "}
        in April and a sit-down with Ben Tracey onboard <em>Falkor (too)</em>{" "}
        for{" "}
        <a href="https://www.cbs.com/shows/video/YBqTWkkVaYdHYFCPIguiXXNrZeCXhldx/">
          CBS Saturday Morning
        </a>
        .
      </p>
      <p>
        <BubbleImage
          image="/assets/images/disseminating_the_depths/ShanHuaArtistAtSea.webp"
          className="press-image"
          direction="down"
        />
        Footage collected by SOI&rsquo;s ROV <em>SuBastian</em> was licensed 24
        times appearing in an BBC Planet Earth III episode, X, and X. Our new
        Creative Commons licensing allowed X people to download footage with
        ease.
      </p>
      <p>
        A new collaboration with NASDAQ and the Charles Darwin Foundation led to
        a 10-minute video of footage from our Galapagos expeditions playing on
        the final day of New York Climate Week in Times Square.
      </p>
      <p>
        Finally, SOI entered into a partnership with BBC for footage sharing and
        filming on SOI expeditions where the footage will contribute to a global
        and prominent series scheduled for 2025.
      </p>
    </>
  );
}

export default PressAndFootage;
