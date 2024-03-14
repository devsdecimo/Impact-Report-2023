import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import Bigelow  from "/assets/images/brands/Bigelow_Secondary.webp";
import UCR from "/assets/images/brands/UCR.webp";
import WHOI from "/assets/images/brands/WHOI.webp";
import UNA from "/assets/images/brands/UNA.webp";
import Temple from "/assets/images/brands/Temple-University.webp";
import UCalgary from "/assets/images/brands/UCalgary.webp";
import SpeSeas from "/assets/images/brands/speseas.webp";
import FieldMuseum from "/assets/images/brands/FieldMuseum.webp";
import CalStateLA from "/assets/images/brands/CalStateLA.webp";
import CIMAR from "/assets/images/brands/CIMAR.webp";
import OVSICORI from "/assets/images/brands/OVSICORI.webp";
import Scripps from "/assets/images/brands/Scripps.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: Bigelow , href: 'https://www.bigelow.org/', target: '_blank' , alt:'Bigelow Laboratory for Ocean Sciences', orientation: 'vertical'},
      { img: UCR, href: 'https://www.ucr.ac.cr/', target: '_blank' , alt:'Universidad de Costa Rica', orientation: 'vertical'},
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'Woods Hole Oceanographic Institution', orientation: 'horizontal'},
      { img: UNA, href: 'https://www.una.ac.cr/', target: '_blank' , alt:'Universidad Nacional de Costa Rica', orientation: 'vertical'},
      { img: Temple, href: 'https://www.temple.edu/', target: '_blank' , alt:'Temple University', orientation: 'vertical'},
      { img: UCalgary, href: 'https://www.ucalgary.ca/', target: '_blank' , alt:'University of Calgary', orientation: 'vertical'},
      { img: SpeSeas, href: 'https://speseas.org/', target: '_blank' , alt:'SpeSeas', orientation: 'vertical'},
      { img: FieldMuseum, href: 'https://www.fieldmuseum.org/', target: '_blank' , alt:' Field Museum', orientation: 'vertical'},
      { img: CalStateLA, href: 'https://www.calstatela.edu/', target: '_blank' , alt:'California State University Los Angeles', orientation: 'vertical'},
      { img: CIMAR, href: 'https://vinv.ucr.ac.cr/es/unidades/centro-de-investigacion-en-ciencias-del-mar-y-limnologia-cimar', target: '_blank' , alt:' Centro de Investigación en Ciencias del Mar y Limnología (CIMAR)', orientation: 'vertical'},
      { img: OVSICORI, href: 'http://www.ovsicori.una.ac.cr/', target: '_blank' , alt:'OVISCO-UNA', orientation: 'vertical'},
      { img: Scripps, href: 'https://www.scripps.edu/', target: '_blank' , alt:'Scripps Research', orientation: 'vertical'},
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