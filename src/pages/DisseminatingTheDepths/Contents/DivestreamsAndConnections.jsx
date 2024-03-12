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
        image="/assets/images/disseminating_the_depths/divestreams_and_connections/Divestreams and Connections  -  FKt230812-AndreaShipToShoreGalapagos-20230825-Ingle-1869.webp"
        className="connections-image"
        direction="down"
      />
      <h3>Divestreams and Connections</h3>
      <p>
        During <em>Falkor (too)&rsquo;s </em>inaugural year<em>, </em>SOI made
        significant improvements to two popular ship-based outreach initiatives:
        the ROV Divestream and the Ship-to-Shore program. We added a new crew
        position &mdash; a multimedia technician &mdash; and rebranded the ROV
        Livestream as{" "}
        <a href="https://www.youtube.com/@SchmidtOcean/streams" target="_blank">
          the SOI Divestream
        </a>
        . Working alongside Data Architect Corinne Bassin, the multimedia
        technician, or MT, reconfigured data overlays into a sleek and
        accessible design. The ship&rsquo;s mission control room was outfitted
        with new equipment throughout the year to enhance the Divestream
        experience for the viewing audience so they can virtually join the
        science team as they explore deep ocean environments.
      </p>
      <p>
        Scientists are encouraged to narrate the Divestream in the language they
        feel most comfortable speaking, resulting in numerous hours of Spanish
        narration and interaction with Spanish-speaking viewers. Some scientists
        moderated the dive in German and Dutch as well. Throughout the year,
        more than 300,000 people viewed the Divestream, experiencing science,
        engineering, and discovery in real time.
      </p>
      <p>
        Additionally, SOI adapted the Ship-to-Shore program from<em> Falkor</em>{" "}
        to <em>Falkor (too) </em>with a more efficient{" "}
        <a href="https://schmidtocean.org/ship-to-shore-program/" target="_blank">
          sign-up process
        </a>{" "}
        and a new virtual assembly format. For 2023 and beyond, ship-to-shore
        encounters will happen primarily with community groups living in the
        country where the ship is operating. Regular{" "}
        <a href="https://www.youtube.com/live/wv3_ZsQkixk?feature=shared" target="_blank">
          SOI Open Houses
        </a>{" "}
        will provide ship-to-shore experiences to a broader audience.
      </p>
      <p>
        Sixty-two connections occurred during the year, reaching 8,600 people
        from Ecuador, Costa Rica, Puerto Rico, Venezuela, the United States,
        Japan, Spain, Italy, Canada, the Netherlands, and Austria. Twenty-eight
        connections in Spanish reached people living in Latin American
        countries, and a collaboration with the Charles Darwin Foundation
        resulted in eleven connections reaching over 350 children living on the
        Gal&aacute;pagos islands.
      </p>
    </DisseminatingTheDepths>
  );
}

export default DivestreamsAndConnections;
