import React from "react";
import { PageContainer } from "./ByTheNumbers.styles";
import Page from "../../components/Page/Page";
import ExpeditionsData from "./ExpeditionsData/ExpeditionsData";
import TraveledData from "./TraveledData/TraveledData";
import MappedData from "./MappedData/MappedData";
import HostedData from "./HostedData/HostedData";
import ConductedData from "./ConductedData/ConductedData";
import CollectedData from "./CollectedData/CollectedData";
import ReachedData from "./ReachedData/ReachedData";
import SharedData from "./SharedData/SharedData";
import Counter from "../../components/Counter/Counter";

function ByTheNumbers() {
  return (
    <PageContainer className="by_the_numbers">
      <Page
        title={
          <img
            src="/assets/images/by_the_numbers/Title.svg"
            alt="By the Numbers"
          />
        }
        header_image="/assets/images/by_the_numbers/Header.webp"
        header_alt="Research Vessel Falkor (too)"
        footer_image="/assets/images/by_the_numbers/Footer.webp"
        footer_alt="Scientists talk in R/V Falkor (too)’s main lab"
        className="by_the_numbers"
      >
        <div className="content">
          <ExpeditionsData></ExpeditionsData>
          <TraveledData></TraveledData>
          <MappedData></MappedData>
          <HostedData></HostedData>
          <ConductedData></ConductedData>
          <CollectedData></CollectedData>
          <ReachedData></ReachedData>
          <SharedData></SharedData>
        </div>
      </Page>
    </PageContainer>
  );
}

export default ByTheNumbers;
