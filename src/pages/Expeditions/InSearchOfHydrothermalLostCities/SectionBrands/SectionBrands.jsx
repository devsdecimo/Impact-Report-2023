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
import Ifremer from "/assets/images/brands/Ifremer.svg"
import PMEL from "/assets/images/brands/pmel.webp"
import PAAaN from "/assets/images/brands/PAAaN.webp"
import OKSI from "/assets/images/brands/OKSI_AI.webp";
import UToronto from "/assets/images/brands/University_of_Toronto-Logo.webp";
import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: ASU, href: 'https://www.asu.edu/', target: '_blank' , alt:'Arizona State University', orientation:'vertical'},
      { img: Dalhousie, href: 'https://www.dal.ca/', target: '_blank', alt:'Dalhousie University', orientation:'vertical'},
      { img: Ifremer, href: 'hhttps://en.ifremer.fr/', target: '_blank', alt:'DFrench Research Institute for Exploitation of the Sea', orientation:'horizontal'},
      { img: MBARI, href: 'https://www.mbari.org/', target: '_blank' , alt:'Monterey Bay Aquarium Research Institute', orientation:'horizontal'},
      { img: OceanExploration, href: 'https://oceanexplorer.noaa.gov/', target: '_blank' , alt:'NOAA Ocean Exploration', orientation:'horizontal'},
      { img: PMEL, href: 'https://www.pmel.noaa.gov/', target: '_blank' , alt:'NOAA Pacific Marine Enviromental Laboratory', orientation:'horizontal'},
      { img: OECI, href: 'https://web.uri.edu/oeci/', target: '_blank' , alt:'Ocean Exploration Cooperative Institute', orientation:'horizontal'},
      { img: OKSI, href: 'https://oksi.ai/', target: '_blank' , alt:'Opto-Knowledge Systems', orientation:'horizontal'},
      { img: PAAaN, href: 'https://ceoas.oregonstate.edu/', target: '_blank' , alt:'Oregon State University', orientation:'vertical'},
      { img: UToronto, href: 'https://www.utoronto.ca/', target: '_blank' , alt:'University of Toronto', orientation:'horizontal'},
      { img: UVIC, href: 'https://www.uvic.ca/', target: '_blank' , alt:'University of Victoria', orientation:'vertical'},
      { img: UW, href: 'https://www.washington.edu/', target: '_blank' , alt:'University of Washington', orientation:'vertical'},
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'Woods Hole Oceanographic Institution', orientation:'horizontal'},

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