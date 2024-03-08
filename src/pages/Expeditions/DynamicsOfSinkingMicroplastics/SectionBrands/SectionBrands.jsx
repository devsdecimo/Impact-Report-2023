import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import Aalborg  from "/assets/images/brands/Aalborg.webp";
import NAMC from "/assets/images/brands/NAMC.webp";
import NationalGeo from "/assets/images/brands/National-Geographic.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: Aalborg , href: 'https://www.en.aau.dk/', target: '_blank' , alt:'AALBORG UNIVERSITY'},
      { img: NAMC, href: 'https://namc.no/', target: '_blank' , alt:'North Atlantic Microplastic Center'},
      { img: NationalGeo, href: 'https://www.nationalgeographic.com/', target: '_blank' , alt:'National Geographic'},
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