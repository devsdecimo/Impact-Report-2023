import React from "react";
import { HomeContainer } from "./Home.styles.jsx";
import ButtonImage from "../../components/ButtonImage/ButtonImage.jsx";

import title from "/assets/images/home/Title.svg";

function Home() {
  return (
    <HomeContainer>
      <div className="mobile-bg"></div>
      <div className="home_content">
        <div className="animatedBG"></div>
        <img
          src={title}
          className="title"
          alt="2023 Impact Report, The Return of the Luck Dragon"
        ></img>
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
            delay="0"
            tooltip="In Search of Hydrothermal Lost Cities"
            tooltipPlace="left"
            href={"/expeditions/in_search_of_hydrothermal_lost_cities"}
            ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_two expedition_button_left"
            src="/assets/images/home/expedition_2.webp"
            delay="0.25"
            tooltip="Health Diagnosis of Deep Sea Coral"
            tooltipPlace="left"
            href={"/expeditions/health_diagnosis_of_deep_sea_coral"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_three expedition_button_left"
            src="/assets/images/home/expedition_3.webp"
            delay="0.5"
            tooltip="Octopus Odyssey/ Octopus Odyssey (too)"
            tooltipPlace="left"
            href={"/expeditions/octopus_odyssey"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_four expedition_button_left"
            src="/assets/images/home/expedition_4.webp"
            delay="0.75"
            tooltip="The Underworld of Hydrothermal Vents"
            tooltipPlace="left"
            href={"/expeditions/the_underworld_of_hydrothermal_vents"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_five expedition_button_right"
            src="/assets/images/home/expedition_5.webp"
            delay="1"
            tooltip="Dynamics of Sinking Microplastics"
            tooltipPlace="right"
            href={"/expeditions/dynamics_of_sinking_microplastics"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_six expedition_button_right"
            src="/assets/images/home/expedition_6.webp"
            delay="1.25"
            tooltip="Hydrothermal Vents of the Western Galápagos"
            tooltipPlace="right"
            href={"/expeditions/hydrothermal_vents_of_the_galapagos"}
            ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_seven expedition_button_right"
            src="/assets/images/home/expedition_7.webp"
            delay="1.5"
            tooltip="Vertical Reefs of the Galápagos"
            tooltipPlace="bottom"
            href={"/expeditions/vertical_reefs_of_the_galapagos"}
            ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_eight expedition_button_right"
            src="/assets/images/home/expedition_8.webp"
            delay="2"
            tooltip="Ultra Fine-Scale Seafloor Mapping"
            tooltipPlace="bottom"
            href={"/expeditions/ultra_fine_scale_seafloor_mapping"}
            ></ButtonImage>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
