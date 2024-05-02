import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import Wien  from "/assets/images/brands/U_Wien.webp";
import NIOZ from "/assets/images/brands/NIOZ.webp";
import CNRS from "/assets/images/brands/cnrs-1.svg";
import NIB from "/assets/images/brands/NIB.webp";
import WHOI from "/assets/images/brands/WHOI.webp";
import Harvard from "/assets/images/brands/Harvard.webp";
import Sorbonne from "/assets/images/brands/Logo_of_Sorbonne_University.svg";
import OBS from "/assets/images/brands/logo_OOB_RGB_100mm_bleu.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands() {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: CNRS , href: 'https://www.cnrs.fr/fr', target: '_blank' , alt:'CNRS', orientation: 'vertical'},
      { img: Sorbonne , href: 'https://www.cnrs.fr/fr', target: '_blank' , alt:'Sorbonne université', orientation: 'vertical'},
      { img: OBS , href: 'https://www.cnrs.fr/fr', target: '_blank' , alt:'Observatoire Océanologique de Banyuls', orientation: 'vertical'},
      { img: Harvard, href: 'https://www.harvard.edu/', target: '_blank' , alt:'Harvard University', orientation: 'vertical'},
      { img: NIB, href: 'https://www.nib.si/eng/', target: '_blank' , alt:'National institute of Biology/Marine Biology Station Piran', orientation: 'horizontal'},
      { img: NIOZ, href: 'https://www.nioz.nl/en', target: '_blank' , alt:'Royal Netherlands Institute for Sea Research', orientation: 'vertical'},
      { img: Wien , href: 'https://www.univie.ac.at/en/', target: '_blank' , alt:'Universität Wien', orientation: 'horizontal'},
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'Woods Hole Oceanographic Institution', orientation: 'horizontal'},
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