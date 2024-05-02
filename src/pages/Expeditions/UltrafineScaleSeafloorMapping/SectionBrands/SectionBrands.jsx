import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";

import Memorial from "/assets/images/brands/memorial-university.webp"
import Victoria from "/assets/images/brands/university-of-victoria.webp"
import Dalhousie from "/assets/images/brands/Dalhousie.webp"
import Ottawa from "/assets/images/brands/ottawa.webp"
import Toronto from "/assets/images/brands/toronto.webp"
import JAMSTEC from "/assets/images/brands/JAMSTEC.webp"
import USGS from "/assets/images/brands/USGS.webp"
import UQAR from "/assets/images/brands/uqar.webp"
import NOC from "/assets/images/brands/NOC.webp"
import Canada from "/assets/images/brands/canada.webp"
import Darwin from "/assets/images/brands/FCD.webp"
import GalapagosPark from "/assets/images/brands/parque-nacional-galapagos.webp"
import INOCAR from "/assets/images/brands/INOCAR.webp"
import KRAKEN from "/assets/images/brands/kraken.webp"


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: Darwin, href: 'https://www.darwinfoundation.org/en/', target: '_blank' , alt:'Charles Darwin Foundation (CDF)', orientation: 'vertical'},
      { img: Dalhousie, href: 'https://www.dal.ca/', target: '_blank' , alt:'Dalhousie University', orientation: 'vertical'},
      { img: Canada, href: 'https://www.dfo-mpo.gc.ca/index-eng.html', target: '_blank' , alt:'Fisheries and Oceans Canada', orientation: 'vertical'},
      { img: GalapagosPark, href: 'https://galapagos.gob.ec/parque-nacional-galapagos/', target: '_blank' , alt:'Galápagos National Park', orientation: 'horizontal'},
      { img: INOCAR, href: 'https://www.inocar.mil.ec/web/index.php', target: '_blank' , alt:'the Ecuadorian Navy’s Oceanographic and Antarctic Institute (INOCAR)', orientation: 'vertical'},
      { img: JAMSTEC, href: 'https://www.jamstec.go.jp/e/', target: '_blank' , alt:'Japan Agency of Marine-Earth Science and Technology', orientation: 'vertical'},
      { img: KRAKEN, href: 'https://krakenrobotics.com/', target: '_blank' , alt:'Kraken Robotics',orientation: 'horizontal'},     
      { img: Memorial, href: 'https://www.mun.ca/', target: '_blank' , alt:'Memorial University', orientation: 'horizontal'},
      { img: USGS, href: 'https://www.usgs.gov/', target: '_blank' , alt:'United States Geological Survey', orientation: 'horizontal'},
      { img: Ottawa, href: 'https://www.uottawa.ca/en', target: '_blank', alt:'University of Ottawa, Canada', orientation: 'vertical'},
      { img: Victoria, href: 'https://www.uvic.ca/', target: '_blank' , alt:'University of Victoria, Canada', orientation: 'vertical'},
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