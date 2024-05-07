import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import Aalborg  from "/assets/images/brands/Aalborg.webp";
import NAMC from "/assets/images/brands/NAMC.webp";
import NationalGeo from "/assets/images/brands/natgeo.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: Aalborg , href: 'https://www.en.aau.dk/', target: '_blank' , alt:'AALBORG UNIVERSITY', orientation:'vertical'},
      { img: NAMC, href: 'https://namc.no/', target: '_blank' , alt:'North Atlantic Microplastic Center', orientation:'horizontal'},
      { img: NationalGeo, href: 'https://www.nationalgeographic.com/', target: '_blank' , alt:'National Geographic', orientation:'horizontal'},
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