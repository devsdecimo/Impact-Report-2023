import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {PageContainer} from "./Page.styles"
import AnimatedHeader from "../AnimatedHeader/AnimatedHeader";

function Page({ children, title, header_image, footer_image, className, header_animated=false }) {
  return (
    <PageContainer className={className}>
      {!header_animated? <Header background={header_image}>{title}</Header> : <AnimatedHeader background={header_image}>{title}</AnimatedHeader>}
      <div className="main_content">
        {children}
      </div>
      <Footer background={footer_image}/>
    </PageContainer>
  );
}

export default Page;
