import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";

/*
Galápagos National Park Directorate (GNPD), 
Charles Darwin Foundation (CDF), 
the Ecuadorian Navy’s Oceanographic and Antarctic Institute (INOCAR), 
National Geographic Society, 
Monterey Bay Aquarium Research Institute (MBARI), 
University of Bristol, 
Woods Hole Oceanographic Institution (WHOI), 
University of Costa Rica, 
the UK National Oceanography Centre, 
Institut de Ciencies del Mar in Barcelona, Spain,
the University of East Anglia-UK
*/

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


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: MemorialUniversity, href: 'https://www.mun.ca/', target: '_blank' , alt:'Memorial University', orientation:'vertical'},
      { img: MarineInstitute, href: 'https://www.mi.mun.ca/', target: '_blank' , alt:'Marine Institute', orientation:'vertical'},
      { img: MBARI, href: 'https://www.mbari.org/', target: '_blank' , alt:'Monterey Bay Aquarium Research Institute (MBARI)', orientation:'horizontal'},
      { img: Bristol, href: 'https://www.bristol.ac.uk/', target: '_blank', alt:'University of Bristol', orientation:'vertical'},
      { img: NatGeo, href: 'https://www.nationalgeographic.com/', target: '_blank' , alt:'National Geographic Society', orientation:'vertical'},
      { img: Darwin, href: 'https://www.darwinfoundation.org/en/', target: '_blank' , alt:'Charles Darwin Foundation (CDF)', orientation:'vertical'},
      { img: GalapagosPark, href: 'https://galapagos.gob.ec/', target: '_blank' , alt:'Galápagos National Park Directorate (GNPD)', orientation:'horizontal'},
      { img: INOCAR, href: 'https://www.inocar.mil.ec/web/index.php', target: '_blank' , alt:'the Ecuadorian Navy’s Oceanographic and Antarctic Institute (INOCAR)', orientation:'vertical'},
      { img: WHOI, href: 'https://www2.whoi.edu/site/miso/', target: '_blank' , alt:'Woods Hole Oceanographic Institution (WHOI)', orientation:'horizontal'},
      { img: OceanCentre, href: 'https://noc.ac.uk/', target: '_blank' , alt:'the UK National Oceanography Centre', orientation:'vertical'},
      { img: CSIC, href: 'https://www.csic.es/en/csic', target: '_blank' , alt:'Instituto de Ciencies del Mar in Barcelona, Spain', orientation:'vertical'},
      { img: UEA, href: 'https://www.uea.ac.uk/', target: '_blank' , alt:'the University of East Anglia-UK', orientation:'vertical'},
      { img: UCR, href: 'https://www.ucr.ac.cr/', target: '_blank' , alt:'University of Costa Rica', orientation:'vertical'},
    ])
  }, []);

  return (
    <SectionBrandsContainer>
        <div >
          <CarouselBrands slides={slides}/>
        </div>
    </SectionBrandsContainer>
    
  );
}

export default SectionBrands;