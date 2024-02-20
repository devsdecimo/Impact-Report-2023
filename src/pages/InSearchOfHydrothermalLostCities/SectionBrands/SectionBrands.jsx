import React from "react";
import { SectionBrandsContainer } from "./SectionBrands.styles";
import CarouselBrands from "../CarouselBrands/CarouselBrands";

import WHOI from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/WHOI.webp";
import OceanExploration from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/ocean-exploration.webp";
import ASU from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/ASU.webp";
import UVIC from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/uvic.webp";
import MBARI from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/MBARI.webp";
import Dalhousie from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/Dalhousie.webp"
import UW from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/university-of-washington.webp"
import NASA from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/nasa.webp"
import PMEL from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/pmel.webp"
import OECI from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/OECI.webp"
import PAAaN from "/assets/images/in_search_of_hydrothermal_lost_cities/brands/PAAaN.webp"

function SectionBrands({image,alt}) {
  const slides = [
    { img: WHOI, href: '#', target: '_blank' },
    { img: OceanExploration, href: '#', target: '_blank' },
    { img: ASU, href: '#', target: '_blank' },
    { img: UVIC, href: '#' },
    { img: MBARI, href: '#', target: '_blank' },
    { img: Dalhousie, href: '#', target: '_blank' },
    { img: UW, href: '#', target: '_blank' },
    { img: NASA, href: '#', target: '_blank' },
    { img: PMEL, href: '#', target: '_blank' },
    { img: OECI, href: '#', target: '_blank' },
    { img: PAAaN, href: '#', target: '_blank' },
  ]
  return (
    <SectionBrandsContainer>
        <div className="brands-container only-desktop">
            <img src={WHOI} alt="WHOI"/>
            <img src={OceanExploration} alt="Ocean Exploration"/>
            <img src={ASU} alt="ASU"/>
            <img src={UVIC} alt="UVIC"/>
            <img src={MBARI} alt="MBARI"/>
            <img src={Dalhousie} alt="Dalhousie"/>
            <img src={UW} alt="University of Washington"/>
            <img src={NASA} alt="NASA"/>
            <img src={PMEL} alt="PMEL"/>
            <img src={OECI} alt="OECI"/>
            <img src={PAAaN} alt="PAAaN"/>
        </div>
        <div className="only-mobile">
          <CarouselBrands slides={slides}/>
        </div>
        
    </SectionBrandsContainer>
    
  );
}

export default SectionBrands;