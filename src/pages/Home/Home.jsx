import React from "react";
import { HomeContainer } from "./Home.styles.jsx";
import ButtonImage from "../../components/ButtonImage/ButtonImage.jsx";

function Home() {
  return (
    <HomeContainer>
      <div className="home_content">
        <div className="animatedBG"></div>
        <img src="/assets/images/home/title.svg" className="title"></img>
        <div className="home_content__expeditions">
          <div className="home_content__main_image_container">
            <img
              src="/assets/images/home/main_image.webp"
              alt=""
              className="home_content__main_image"
            />
          </div>

          <ButtonImage
            className="expedition_button expedition_button_one"
            src="/assets/images/home/expedition_1.webp"
            delay="1"
            tooltip={"Expedition 1"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_two"
            src="/assets/images/home/expedition_2.webp"
            delay="1.5"
            tooltip={"Expedition 2"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_three"
            src="/assets/images/home/expedition_3.webp"
            delay="2"
            tooltip="Octopus Odyssey"
            href={'/expeditions/octopus_odyssey'}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_four"
            src="/assets/images/home/expedition_4.webp"
            delay="2.5"
            tooltip={"Expedition 4"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_five"
            src="/assets/images/home/expedition_5.webp"
            delay="3"
            tooltip="Dynamics of Sinking Microplastics"
            href={'/expeditions/dynamics_of_sinking_microplastics'}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_six"
            src="/assets/images/home/expedition_6.webp"
            delay="3.5"
            tooltip={"Expedition 6"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_seven"
            src="/assets/images/home/expedition_7.webp"
            delay="4"
            tooltip={"Expedition 7"}
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_eight"
            src="/assets/images/home/expedition_8.webp"
            delay="4.5"
            tooltip={"Expedition 8"}
          ></ButtonImage>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
