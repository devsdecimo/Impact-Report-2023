import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import DisseminatingTheDepths from "../DisseminatingTheDepths";

function DivestreamsAndConnections() {
  return (
    <DisseminatingTheDepths
      title={
        <img
          src="/assets/images/disseminating_the_depths/divestreams_and_connections/Title.svg"
          alt="Divestreams and Connections"
        />
      }
      header_image="/assets/images/disseminating_the_depths/divestreams_and_connections//Header.webp"
      footer_image="/assets/images/disseminating_the_depths/divestreams_and_connections/Footer.webp"
    >
      <BubbleImage
        image="/assets/images/disseminating_the_depths/divestreams_and_connections/FKt230115-LivestreamTest-20230126-Ingle-9804 (1).webp"
        className="connections-image"
        direction="down"
      />
      <h3>Divestreams and Connections</h3>
      <p>
        During <em>Falkor (too)&rsquo;s</em> inaugural year, two ship-based
        outreach initiatives were improved: the ROV Divestream and our
        Ship-to-Shore Connection program.
      </p>
      <p>
        We renamed the ROV Livestream the{" "}
        <a href="https://www.youtube.com/@SchmidtOcean/streams">
          <u>SOI Divestream</u>
        </a>
        . Working alongside Head of Data Solutions Corinne Bassin, the
        multimedia technician, or MMT, reconfigured data overlays into a sleek
        and accessible design, enhancing the Divestream experience for the
        viewing audience as they virtually join the science team to explore
        deep-ocean environments.
      </p>
      <p>
        Scientists are encouraged to narrate the Divestream in the language they
        feel most comfortable speaking; this resulted in numerous hours of
        Spanish narration and interaction with Spanish-speaking viewers. Some
        scientists moderated the dives in Dutch, German, and Japanese.
        Throughout the year, more than 300,000 people experienced science,
        engineering, and discovery in real time via the Divestream.
      </p>
      <p>
        The Ship-to-Shore Connection program was adapted from <em>Falkor</em> to{" "}
        <em>Falkor (too)</em> with a more efficient{" "}
        <a href="https://schmidtocean.org/how-to-apply-for-berths-opportunity-artists-setting-the-course-2023/">
          <u>sign-up process </u>
        </a>{" "}
        and a new virtual assembly format. For 2023 and beyond, community groups
        and schools within the ship&rsquo;s operating region will be given
        priority for Ship-to-Shore Connections. Regular{" "}
        <a href="https://www.youtube.com/watch?v=wv3_ZsQkixk">
          <u>SOI Open Houses</u>
        </a>{" "}
        are livestreamed to SOI&rsquo;s YouTube, providing experiences similar
        to ship-to-shores to a broader audience.
      </p>
      <p>
        Sixty-two connections occurred during the year, reaching 8,600 people
        from Ecuador, Costa Rica, Puerto Rico, Venezuela, the United States,
        Japan, Spain, Italy, Canada, the Netherlands, and Austria. Twenty-eight
        connections in Spanish reached people living in Latin American
        countries, and a collaboration with the Charles Darwin Foundation
        resulted in eleven connections for over 350 children living on the
        Gal&aacute;pagos islands.
      </p>
    </DisseminatingTheDepths>
  );
}

export default DivestreamsAndConnections;
