import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import WHOI from "/assets/images/brands/WHOI.webp";
import OECI from "/assets/images/brands/OECI.webp"
import MBARI from "/assets/images/brands/MBARI.webp";


import OceanExploration from "/assets/images/brands/ocean-exploration.webp";
import ASU from "/assets/images/brands/ASU.webp";
import UVIC from "/assets/images/brands/uvic.webp";
import Dalhousie from "/assets/images/brands/Dalhousie.webp"
import UW from "/assets/images/brands/university-of-washington.webp"
import NASA from "/assets/images/brands/nasa.webp"
import PMEL from "/assets/images/brands/pmel.webp"
import PAAaN from "/assets/images/brands/PAAaN.webp"
import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'WHOI', orientation:'horizontal'},
      { img: OceanExploration, href: 'https://oceanexplorer.noaa.gov/', target: '_blank' , alt:'Ocean Exploration', orientation:'horizontal'},
      { img: ASU, href: 'https://www.asu.edu/', target: '_blank' , alt:'ASU', orientation:'vertical'},
      { img: UVIC, href: 'https://www.uvic.ca/', target: '_blank' , alt:'UVIC', orientation:'vertical'},
      { img: MBARI, href: 'https://www.mbari.org/', target: '_blank' , alt:'MBARI', orientation:'horizontal'},
      { img: Dalhousie, href: 'https://www.dal.ca/', target: '_blank', alt:'Dalhousie', orientation:'vertical'},
      { img: UW, href: 'https://www.washington.edu/', target: '_blank' , alt:'Washington University', orientation:'horizontal'},
      { img: NASA, href: 'https://www.nasa.gov/', target: '_blank' , alt:'NASA', orientation:'vertical'},
      { img: PMEL, href: 'https://www.pmel.noaa.gov/', target: '_blank' , alt:'PMEL', orientation:'horizontal'},
      { img: OECI, href: 'https://web.uri.edu/oeci/', target: '_blank' , alt:'OECI', orientation:'horizontal'},
      { img: PAAaN, href: 'https://ceoas.oregonstate.edu/', target: '_blank' , alt:'CEOAS', orientation:'vertical'},
    ])
  }, []);

  return (
    <SectionBrandsContainer>
        <div>
          <CarouselBrands slides={slides}/>
        </div>
        
    </SectionBrandsContainer>
    
  );
}

export default SectionBrands;