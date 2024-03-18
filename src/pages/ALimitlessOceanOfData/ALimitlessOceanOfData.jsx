import React from "react";
import { PageContainer } from "./ALimitlessOceanOfData.styles";
import Page from "../../components/Page/Page";

import headerImage from "/assets/images/a_limitless_ocean_of_data/Header.webp";


function ALimistlessOceanOfData() {
  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/a_limitless_ocean_of_data/Title.svg"
            alt="A Limitless Ocean Of Data"
          />
        }
        header_image={headerImage}
        footer_image="/assets/images/a_limitless_ocean_of_data/Footer.webp"
      >
        <div className="content">
          <p>
            One of Schmidt Ocean Institute’s (SOI) objectives is quality data collection. The ship and deployable systems, such as ROV <em>SuBastian</em>, transmit data in a variety of ways, ensuring  timely, correct data. After 18 months of planning and preparation, we were able to test new ship-to-shore data architecture when Research Vessel <em>Falkor (too)</em> left Vigo, Spain at the start of the year. Many of the features could only be completed once systems came online. With the ship underway, our team was able to get all systems ready for the inaugural science expedition.
          </p>
          <p>
            SOI employed a variety of open-source tools to ensure accurate data collection, including <a href="https://github.com/OceanDataTools/openvdm" target="_blank">OpenVDM</a>, <a href="https://openrvdas.org/" target="_blank">OpenRVDAS</a>, and <a href="https://www.influxdata.com/" target="_blank">InfluxDB</a>. OpenVDM is a software package supported by SOI and was previously used on <em>Falkor</em>, making it a good choice for <em>Falkor (too)</em>. OpenRVDAS is a newer software package that is becoming more prevalent in research ships around the world.
          </p>
          <p>
            <em>Falkor (too)</em>’s real-time data are written to a database, then incorporated into a highly configurable dashboard that allows marine technicians and scientists at sea to review, search, and analyze data in real time both for scientific analysis and instrument operation. Multiple systems monitor for quality, with alert notifications that help the team address problems quickly. The new platform allows for real-time transformation of raw data; users can apply geophysical or chemical corrections to sensor information, or collect information, such as the drift between various sensors or the calculation of true wind. Automated systems improve reporting and workflows, enabling faster more equipped science at sea and onshore. 
          </p>
          <p>
            With this new data architecture on <em>Falkor (too)</em>, SOI is advancing our ability to understand the Ocean.
          </p>
        </div>
      </Page>
    </PageContainer>
  );
}

export default ALimistlessOceanOfData;
