import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {PageContainer} from "./Page.styles"

function Page({ children, title, header_image, footer_image }) {
  return (
    <PageContainer>
      <Header background={header_image}>{title}</Header>
      <div className="main_content">
        {children}
      </div>
      <Footer background={footer_image}/>
    </PageContainer>
  );
}

export default Page;
