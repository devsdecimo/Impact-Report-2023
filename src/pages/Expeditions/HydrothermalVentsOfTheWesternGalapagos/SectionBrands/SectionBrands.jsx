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
import USGS from "/assets/images/brands/USGS.webp";
import Lamont from "/assets/images/brands/lamont.webp";
import Harvard from "/assets/images/brands/harvard-university.webp";
import Darwin from "/assets/images/brands/FCD.webp";
import GalapagosPark from "/assets/images/brands/parque-nacional-galapagos.webp";
import INOCAR from "/assets/images/brands/INOCAR.webp";
import WISC from "/assets/images/brands/the-university-of-wisconsin-madison.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: Darwin, href: 'https://www.darwinfoundation.org/en/', target: '_blank' , alt:'The Charles Darwin Foundation', orientation:'vertical'},
      { img: Lamont, href: 'https://lamont.columbia.edu/', target: '_blank' , alt:'Lamont-Doherty Earth Observatory', orientation:'horizontal'},
      { img: GalapagosPark, href: 'https://galapagos.gob.ec/', target: '_blank' , alt:'The Galápagos National Park', orientation:'horizontal'},
      { img: Harvard, href: 'https://www.temple.edu/', target: '_blank' , alt:'Harvard University', orientation:'vertical'},
      { img: INOCAR, href: 'https://www.inocar.mil.ec/web/index.php', target: '_blank' , alt:'Instituto Oceanográfico y Antártico de la Armada del Ecuador (INOCAR)', orientation:'vertical'},
      { img: USGS, href: 'https://www.whoi.edu/', target: '_blank' , alt:'United States Geological Survey', orientation:'horizontal'},
      { img: RhodeIsland , href: 'https://www.bigelow.org/', target: '_blank' , alt:'University of Rhode Island', orientation:'vertical'},
      { img: WISC , href: 'https://www.wisc.edu/', target: '_blank' , alt:'University of Wisonsin - Madison', orientation:'horizontal'},
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