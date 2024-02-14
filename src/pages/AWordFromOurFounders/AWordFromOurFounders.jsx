import React from "react";
import Page from "../../components/Page/Page";
import IconWithText from "../../components/IconWithText/IconWithText";
import Ship from "/assets/images/ship.svg";
import Pin from "/assets/images/pin.svg";
import Carousel from "../../components/Carousel/Carousel";
import image from "/assets/images/home/expedition_1.webp";
import image2 from "/assets/images/home/expedition_2.webp";
import image3 from "/assets/images/home/expedition_3.webp";
import image4 from "/assets/images/home/expedition_4.webp";
import image5 from "/assets/images/home/OceanTile.png";

function AWordFromOurFounders() {

  const slides = [
    { img: image, href: '#', target: '_blank' },
    { img: image2, href: '#', target: '_blank' },
    { img: image3, href: '#', target: '_blank' },
    { img: image4, href: '#' },
    { img: image5 }
  ];

  return (
    <Page
      title={<>A Word From Our <span className="big_text">Founders</span></>}
      header_image="/assets/images/a_word_from_our_founders/Header.webp"
    >
      <IconWithText className={'CTA'} icon={Pin} text={"San Juan, Puerto Rico"} opacity={1}></IconWithText>
      <IconWithText className={'CTA'} icon={Ship} numbers={34100} text={"sq km mapped "} opacity={0.9}></IconWithText>
      <IconWithText className={'CTA'} icon={Ship} text={"Without numbers"} opacity={1}></IconWithText>
      <h2>Content</h2>

      <Carousel slides={slides}></Carousel>
      <div style={{height: '20em'}}></div>
    </Page>
  );
}

export default AWordFromOurFounders;
