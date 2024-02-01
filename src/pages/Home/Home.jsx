import React from "react";
import { HomeContainer } from "./Home.styles.jsx";
import ButtonImage from "../../components/ButtonImage/ButtonImage.jsx";

function Home() {
  return (
    <HomeContainer>
      <div className="home_content">
        <div className="animatedBG"></div>
        <img src="/assets/images/home/title.webp" className="title" alt="2023 Impact Report, The Return of the Luck Dragon"></img>
        <div className="home_content__expeditions">
          <div className="home_content__main_image_container">
            <img
              src="/assets/images/home/main_image.webp"
              alt=""
              className="home_content__main_image"
            />
          </div>
          <ButtonImage
            className="expedition_button expedition_button_one expedition_button_left"
            src="/assets/images/home/expedition_1.webp"
            delay="1"
            tooltipTheme="soi-left"
            tooltip="In Search of Hydrothermal Lost Cities"
            tooltipPlace="left"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_two expedition_button_left"
            src="/assets/images/home/expedition_2.webp"
            delay="1.5"
            tooltipTheme="soi-left"
            tooltip="Health Diagnosis of Deep Sea Coral"
            tooltipPlace="left"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_three expedition_button_left"
            src="/assets/images/home/expedition_3.webp"
            delay="2"
            tooltipTheme="soi-left"
            tooltip="Octopus Odessey/ Octopus Odessey (too)"
            tooltipPlace="left"
            href={"/expeditions/octopus_odyssey"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_four expedition_button_left"
            src="/assets/images/home/expedition_4.webp"
            delay="2.5"
            tooltipTheme="soi-left"
            tooltip="The Underworld of Hydrothermal Vents"
            tooltipPlace="left"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_five expedition_button_right"
            src="/assets/images/home/expedition_5.webp"
            delay="3"
            tooltipTheme="soi-right"
            tooltip="Dynamics of Sinking Microplastics"
            tooltipPlace="right"
            href={"/expeditions/dynamics_of_sinking_microplastics"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_six expedition_button_right"
            src="/assets/images/home/expedition_6.webp"
            delay="3.5"
            tooltipTheme="soi-right"
            tooltip="Hydrothermal Vents of the Western Galápagos"
            tooltipPlace="right"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_seven expedition_button_right"
            src="/assets/images/home/expedition_7.webp"
            delay="4"
            tooltipTheme="soi-right"
            tooltip="Vertical Reefs of the Galápagos"
            tooltipPlace="right"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_eight expedition_button_right"
            src="/assets/images/home/expedition_8.webp"
            delay="4.5"
            tooltipTheme="soi-right"
            tooltip="Ultra Fine-Scale Seafloor Mapping"
            tooltipPlace="right"
          ></ButtonImage>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
