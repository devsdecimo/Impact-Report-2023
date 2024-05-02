import React from "react";
import BubbleImage from "../../../components/BubbleImage/BubbleImage";
import TheDeepSeaContinuum from "../TheDeepSeaContinuum";

function Service({ children }) {
  return (
    <TheDeepSeaContinuum
      title={
        <img
          src="/assets/images/the_deep_sea_continuum/service/Title.svg"
          alt="Service"
          loading="lazy"
        />
      }
      header_image={"/assets/images/the_deep_sea_continuum/service/Header.webp"}
      footer_image="/assets/images/the_deep_sea_continuum/service/Footer.webp"
    >
      <div className="content-group">
        <p>
          Volunteer service as trustees, advisors, and subject matter experts
          helps advance the ocean community&rsquo;s collective goals for
          exploring and understanding our Ocean &mdash; together, we can excite
          interest and inform the wise stewardship of our planet. In 2023,
          Schmidt Ocean Institute staff began serving the following
          organizations:
        </p>
        <ul>
          <li>
            <a href="https://www.nationalacademies.org/our-work/2025-2035-decadal-survey-of-ocean-sciences-for-the-national-science-foundation">
              Decadal Survey of Ocean Sciences for the National Science
              Foundation
            </a>{" "}
            | Allison Miller
          </li>
          <li>
            <a href="https://www.weforum.org/friends-of-ocean-action/">
              Friends of Ocean Action
            </a>{" "}
            | Dr. Jyotika Virmani
          </li>
          <li>
            <a href="https://nationalstemchallenge.com/2024">
              National STEM Challenge Advisory Council
            </a>{" "}
            | Dr. Jyotika Virmani
          </li>
          <li>
            <a href="https://oeab.noaa.gov">
              NOAA Ocean Exploration Advisory Board
            </a>{" "}
            | Eric King
          </li>
          <li>
            <a href="https://www.oceanvisionai.org/">Ocean Vision AI </a>| Dr.
            Jyotika VIrmani
          </li>
          <li>
            <a href="https://www.pml.ac.uk/">
              Plymouth Marine Laboratory Board of Trustees
            </a>{" "}
            | Dr. Jyotika Virmani
          </li>
          <li>
            <a href="https://www.ucar.edu/who-we-are/community-programs/ucp-external-advisory-committee">
              University Corporation for Atmospheric Research Community Programs
              External Advisory Committee
            </a>{" "}
            | Allison Miller
          </li>
          <li>
            <a href="https://oceandecade.org/publications/ocean-decade-data-information-strategy/">
              UN Decade of Ocean Science for Sustainable Development, Data
              Strategy Implementation Group
            </a>{" "}
            | Corrine Bassin
          </li>
        </ul>
      </div>
    </TheDeepSeaContinuum>
  );
}

export default Service;
