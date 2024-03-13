import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import WHOI from "/assets/images/brands/WHOI.webp";
import SI from "/assets/images/brands/SI_logo.webp";
import LehighU from "/assets/images/brands/LehighU.webp";
import UPR from "/assets/images/brands/UPR.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'Woods Hole Oceanographic Institution', orientation: 'horizontal'},
      { img: LehighU, href: 'https://www2.lehigh.edu/', target: '_blank' , alt:'Lehigh University', orientation: 'horizontal'},
      { img: UPR, href: 'https://www.uprm.edu/', target: '_blank' , alt:'University of Puerto Rico', orientation: 'vertical'},
      { img: SI, href: 'https://www.si.edu/', target: '_blank' , alt:'Smithsonian Institute', orientation: 'vertical'},
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