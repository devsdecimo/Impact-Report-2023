import React from "react";
import Page from "../../components/Page/Page";
import image from "/assets/images/home/expedition_1.webp";
import image2 from "/assets/images/home/expedition_2.webp";
import image3 from "/assets/images/home/expedition_3.webp";
import image4 from "/assets/images/home/expedition_4.webp";
import Carousel from "../../components/Carousel/Carousel";

function AWordFromOurFounders() {

  const slides = [
    { img: image, href: '#' },
    { img: image2, href: '#' },
    { img: image3, href: '#' },
    { img: image4, href: '#' }
  ];

  return (
    <Page
      title={<>A Word From Our <span className="big_text">Founders</span></>}
      header_image="/assets/images/a_word_from_our_founders/Header.webp"
    > 
      <Carousel slides={slides}></Carousel>
      <h2>Content</h2>
    </Page>
  );
}

export default AWordFromOurFounders;
