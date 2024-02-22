import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "./SectionBrands.styles";
import CarouselBrands from "../CarouselBrands/CarouselBrands";
import { Link } from "react-router-dom";

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
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'WHOI'},
      { img: OceanExploration, href: 'https://oceanexplorer.noaa.gov/', target: '_blank' , alt:'Ocean Exploration'},
      { img: ASU, href: 'https://www.asu.edu/', target: '_blank' , alt:'ASU'},
      { img: UVIC, href: 'https://www.uvic.ca/' , alt:'UVIC'},
      { img: MBARI, href: 'https://www.mbari.org/', target: '_blank' , alt:'MBARI'},
      { img: Dalhousie, href: 'https://www.dal.ca/', target: '_blank', alt:'Dalhousie'},
      { img: UW, href: 'https://www.washington.edu/', target: '_blank' , alt:'Washington University'},
      { img: NASA, href: 'https://www.nasa.gov/', target: '_blank' , alt:'NASA'},
      { img: PMEL, href: 'https://www.pmel.noaa.gov/', target: '_blank' , alt:'PMEL'},
      { img: OECI, href: 'https://web.uri.edu/oeci/', target: '_blank' , alt:'OECI'},
      { img: PAAaN, href: 'https://ceoas.oregonstate.edu/', target: '_blank' , alt:'CEOAS'},
    ])
  }, []);

  return (
    <SectionBrandsContainer>
        <div className="brands-container only-desktop">
          {slides.map((slide, index)=>
          <Link to={slide.href} target={slide.target} key={index}>
            <img src={slide.img} alt={slide.alt}/>
          </Link>
            )}
        </div>
        <div className="only-mobile">
          <CarouselBrands slides={slides}/>
        </div>
        
    </SectionBrandsContainer>
    
  );
}

export default SectionBrands;