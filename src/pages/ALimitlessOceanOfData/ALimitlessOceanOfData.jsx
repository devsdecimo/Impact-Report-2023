import React from "react";
import { PageContainer } from "./ALimitlessOceanOfData.styles";
import Page from "../../components/Page/Page";

import headerImage from "/assets/images/a_limitless_ocean_of_data/Header.webp";
import BubbleImage from "../../components/BubbleImage/BubbleImage";

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
          <BubbleImage
            image="/assets/images/a_limitless_ocean_of_data/SubastianBothArms.webp"
            className="limitless-image"
            type={3}
            orientation="left"
          />
          <h3>Architecture for Flow</h3>
          <p>
            The ship and deployable systems, such as ROV <em>SuBastian,</em>{" "}
            transmit data in various ways, ensuring timely data collection.
            After 16 months of planning and preparation, we could begin testing
            the new ship-to-shore data architecture when the research vessel{" "}
            <em> Falkor (too)</em> left the shipyard in Vigo, Spain, at the
            start of 2023. Many of the features could only be completed once
            systems came online. With the ship underway, our data, IT, and
            science teams were able to bring systems online for the inaugural
            science expedition.
          </p>
          <p>
            <br />
            We employed a variety of open-source tools to ensure accurate data
            collection, including{" "}
            <a href="https://github.com/OceanDataTools/openvdm" target="_blank" rel="noopener noreferrer">
              <u>OpenVDM,</u>
            </a>{" "}
            <a href="https://openrvdas.org/" target="_blank" rel="noopener noreferrer">
              <u>OpenRVDAS, and</u>
            </a>{" "}
            <a href="https://www.influxdata.com/" target="_blank" rel="noopener noreferrer">
              <u>InfluxDB. </u>
            </a>{" "}
            OpenVDM is a software package supported by Schmidt Ocean Institute
            and was previously used on <em>Falkor,</em> making it a good choice
            for <em>Falkor (too).</em> OpenRVDAS is a newer software package
            that is becoming more prevalent in research ships worldwide. We can
            push our contributions back into the broader community by building
            on open-source tools. Employing these systems allows us to capture
            data, write it to file and to a database, and move it to locations
            accessible to scientists.
          </p>
          <p>
            Although we set these systems up for the known science
            instrumentation owned and operated by SOI, these systems are also
            flexible and configurable for integrating equipment brought on by
            scientists on a per-expedition basis. On the initial scientific
            expedition, the success of this approach was evident when we
            connected a science party&rsquo;s magnetometer to our data
            acquisition system. The data from the magnetometer was not only
            saved as part of the expedition products but visualization of the
            data was made available in real time to scientists aboard.
          </p>
          <p>
            <em>Falkor (too)&rsquo;s</em> real-time data are written to a
            database and then incorporated into a highly configurable dashboard
            that allows marine technicians and scientists at sea to review,
            search, and analyze data in real time. Multiple systems monitor the
            data for quality, sending alert notifications to the marine
            technicians on board or the data and IT teams on shore to help them
            address problems quickly. The new platform allows for real-time
            transformation of raw data; users can apply geophysical or chemical
            corrections to sensor information or collect information, such as
            the drift between various sensors or the calculation of true wind.
            Automated systems improve reporting and workflows, enabling faster,
            more equipped science at sea and onshore. With this new data
            architecture on <em>Falkor (too),</em> we are advancing scientists'
            ability to understand the Ocean.
          </p>
        </div>
      </Page>
    </PageContainer>
  );
}

export default ALimistlessOceanOfData;
