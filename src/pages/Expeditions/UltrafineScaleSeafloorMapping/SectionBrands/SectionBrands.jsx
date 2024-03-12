import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";

/*
import GalapagosPark from "/assets/images/brands/parque-nacional-galapagos.webp"
import MemorialUniversity from "/assets/images/brands/memorial-university.webp"
import MarineInstitute from "/assets/images/brands/marine-institute.webp"
import Darwin from "/assets/images/brands/FCD.webp"
import INOCAR from "/assets/images/brands/INOCAR.webp"
import NatGeo from "/assets/images/brands/natgeo.webp"
import MBARI from "/assets/images/brands/MBARI.webp"
import Bristol from "/assets/images/brands/university-of-bristol.webp"
import WHOI from "/assets/images/brands/WHOI.webp"
import UCR from "/assets/images/brands/UCR.webp"
import OceanCentre from "/assets/images/brands/NOC.webp"
import CSIC from "/assets/images/brands/CSIC.webp"
import UEA from "/assets/images/brands/UEA.webp"
*/
/*
Memorial University of Newfoundland, Canada; 
Dalhousie University, Canada; 
University of Victoria, Canada; 
University of Ottawa, Canada; 
University de Quebec a Rimouski, Canada; 
Fisheries and Oceans Canada; 
United States Geological Survey; 
Woods Hole Oceanographic Institution, USA; 
JAMSTEC, Japan, 
Galápagos National Park, 
Charles Darwin Foundation, 
INOCAR

*/
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
      { img: Memorial, href: 'https://www.mun.ca/', target: '_blank' , alt:'Memorial University', orientation: 'horizontal'},
      { img: Victoria, href: 'https://www.uvic.ca/', target: '_blank' , alt:'University of Victoria, Canada', orientation: 'vertical'},
      { img: Dalhousie, href: 'https://www.dal.ca/', target: '_blank' , alt:'Dalhousie University, Canada', orientation: 'vertical'},
      { img: Ottawa, href: 'https://www.uottawa.ca/en', target: '_blank', alt:'University of Ottawa, Canada', orientation: 'vertical'},
      { img: Toronto, href: 'https://www.utoronto.ca/', target: '_blank' , alt:'University of Toronto, Canada', orientation: 'vertical'},
      { img: JAMSTEC, href: 'https://www.jamstec.go.jp/e/', target: '_blank' , alt:'JAMSTEC, Japan', orientation: 'vertical'},
      { img: USGS, href: 'https://www.usgs.gov/', target: '_blank' , alt:'United States Geological Survey', orientation: 'horizontal'},
      { img: UQAR, href: 'https://www.uqar.ca/', target: '_blank' , alt:'University de Quebec a Rimouski, Canada', orientation: 'horizontal'},
      { img: NOC, href: 'https://noc.ac.uk/', target: '_blank' , alt:'NOC', orientation: 'vertical'},
      { img: Canada, href: 'https://www.dfo-mpo.gc.ca/index-eng.html', target: '_blank' , alt:'Fisheries and Oceans Canada', orientation: 'vertical'},
      { img: Darwin, href: 'https://www.darwinfoundation.org/en/', target: '_blank' , alt:'Charles Darwin Foundation (CDF)', orientation: 'vertical'},
      { img: GalapagosPark, href: 'https://galapagos.gob.ec/parque-nacional-galapagos/', target: '_blank' , alt:'Galápagos National Park', orientation: 'horizontal'},
      { img: INOCAR, href: 'https://www.inocar.mil.ec/web/index.php', target: '_blank' , alt:'the Ecuadorian Navy’s Oceanographic and Antarctic Institute (INOCAR)', orientation: 'vertical'},
      { img: KRAKEN, href: 'https://krakenrobotics.com/', target: '_blank' , alt:'KRAKEN',orientation: 'horizontal'},     
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