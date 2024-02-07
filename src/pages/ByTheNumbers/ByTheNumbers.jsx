import React from "react";
import { PageContainer } from "./ByTheNumbers.styles";
import Page from "../../components/Page/Page";
import ExpeditionsData from "./ExpeditionsData/ExpeditionsData";
import TraveledData from "./TraveledData/TraveledData";
import MappedData from "./MappedData/MappedData";
import HostedData from "./HostedData/HostedData";
import ConductedData from "./ConductedData/ConductedData";
import CollectedData from "./CollectedData/CollectedData";

function ByTheNumbers() {
  return (
    <PageContainer>
      <Page
        title={
          <img
            src="/assets/images/by_the_numbers/Title.svg"
            alt="By the Numbers"
          />
        }
        header_image="/assets/images/by_the_numbers/Header.webp"
        footer_image="/assets/images/by_the_numbers/Footer.webp"
      >
        <div className="intro-text">
          <p>
            It is a long established fact that a reader will be distracted by
            the
            <br></br>
            readable content of a page when looking at its layout.
          </p>
          <span className="separator" />
        </div>
        <div className="content">
          <ExpeditionsData></ExpeditionsData>
          <TraveledData></TraveledData>
          <MappedData></MappedData>
          <HostedData></HostedData>
          <ConductedData></ConductedData>
          <CollectedData></CollectedData>

          {/* 
       
          <TraveledData></TraveledData>
          <TraveledData></TraveledData> */}
        </div>
      </Page>
    </PageContainer>
  );
}

export default ByTheNumbers;
