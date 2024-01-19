import React from "react";
import { HomeContainer } from "./Home.styles.jsx";
import ButtonImage from "../../components/ButtonImage/ButtonImage.jsx";

function Home() {
  return (
    <HomeContainer>
      <div className="home_content">
        <div className="animatedBG"></div>
        <img src="/src/assets/images/home/title.svg" className="title"></img>
        <div className="home_content__expeditions">
          <img
            src="/src/assets/images/home/main_image.webp"
            alt=""
            className="home_content__main_image"
          />
          <ButtonImage
            className="expedition_button expedition_button_one"
            src="/src/assets/images/home/expedition_1.webp"
            delay="1"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_two"
            src="/src/assets/images/home/expedition_2.webp"
            delay="1.5"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_three"
            src="/src/assets/images/home/expedition_3.webp"
            delay="2"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_four"
            src="/src/assets/images/home/expedition_4.webp"
            delay="2.5"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_five"
            src="/src/assets/images/home/expedition_5.webp"
            delay="3"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_six"
            src="/src/assets/images/home/expedition_6.webp"
            delay="3.5"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_seven"
            src="/src/assets/images/home/expedition_7.webp"
            delay="4"
          ></ButtonImage>
          <ButtonImage
            className="expedition_button expedition_button_eight"
            src="/src/assets/images/home/expedition_8.webp"
            delay="4.5"
          ></ButtonImage>
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
