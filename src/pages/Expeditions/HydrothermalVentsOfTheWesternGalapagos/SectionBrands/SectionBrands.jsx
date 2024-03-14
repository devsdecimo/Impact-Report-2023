import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

/*
University of Rhode Island, 
Lehigh University, 
United States Geological Survey, 
Lamont-Doherty Earth Observatory, 
Harvard University, 
PMEL,
The Charles Darwin Foundation, 
The Galápagos National Park, 
Instituto Oceanográfico y Antártico de la Armada del Ecuador (INOCAR)
*/

import RhodeIsland from "/assets/images/brands/university-of-rhode-island.webp";
import Lehigh from "/assets/images/brands/LehighU.webp";
import USGS from "/assets/images/brands/USGS.webp";
import Lamont from "/assets/images/brands/lamont.webp";
import Harvard from "/assets/images/brands/harvard-university.webp";
import PMEL from "/assets/images/brands/pmel.webp";
import Darwin from "/assets/images/brands/FCD.webp";
import GalapagosPark from "/assets/images/brands/parque-nacional-galapagos.webp";
import INOCAR from "/assets/images/brands/INOCAR.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: RhodeIsland , href: 'https://www.bigelow.org/', target: '_blank' , alt:'University of Rhode Island', orientation:'vertical'},
      { img: Lehigh, href: 'https://www.ucr.ac.cr/', target: '_blank' , alt:'Lehigh University', orientation:'horizontal'},
      { img: USGS, href: 'https://www.whoi.edu/', target: '_blank' , alt:'United States Geological Survey', orientation:'horizontal'},
      { img: Lamont, href: 'https://www.una.ac.cr/', target: '_blank' , alt:'Lamont-Doherty Earth Observatory', orientation:'horizontal'},
      { img: Harvard, href: 'https://www.temple.edu/', target: '_blank' , alt:'Harvard University', orientation:'vertical'},
      { img: PMEL, href: 'https://www.ucalgary.ca/', target: '_blank' , alt:'PMEL', orientation:'horizontal'},
      { img: Darwin, href: 'https://www.darwinfoundation.org/en/', target: '_blank' , alt:'The Charles Darwin Foundation', orientation:'vertical'},
      { img: GalapagosPark, href: 'https://galapagos.gob.ec/', target: '_blank' , alt:'The Galápagos National Park', orientation:'horizontal'},
      { img: INOCAR, href: 'https://www.inocar.mil.ec/web/index.php', target: '_blank' , alt:'Instituto Oceanográfico y Antártico de la Armada del Ecuador (INOCAR)', orientation:'vertical'},
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