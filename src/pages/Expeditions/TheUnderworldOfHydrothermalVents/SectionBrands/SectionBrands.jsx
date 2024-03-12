import React, {useState, useEffect} from "react";
import { SectionBrandsContainer } from "../../SectionBrands.styles";
import { Link } from "react-router-dom";

import Wien  from "/assets/images/brands/U_Wien.webp";
import NIOZ from "/assets/images/brands/NIOZ.webp";
import LECOB from "/assets/images/brands/LECOB.webp";
import NIB from "/assets/images/brands/NIB.webp";
import WHOI from "/assets/images/brands/WHOI.webp";
import Harvard from "/assets/images/brands/Harvard.webp";
import MPI_Bremen from "/assets/images/brands/MPI_Bremen.webp";
import Rug_university from "/assets/images/brands/rug_university.webp";

import CarouselBrands from "../../../../components/CarouselBrands/CarouselBrands";


function SectionBrands() {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: Wien , href: 'https://www.univie.ac.at/en/', target: '_blank' , alt:'Universität Wien', orientation: 'horizontal'},
      { img: NIOZ, href: 'https://www.nioz.nl/en', target: '_blank' , alt:'Royal Netherlands Institute for Sea Research', orientation: 'vertical'},
      { img: LECOB, href: 'http://lecob.obs-banyuls.fr/index.php/en/', target: '_blank' , alt:'Benthic Ecogeochemistry Laboratory', orientation: 'horizontal'},
      { img: NIB, href: 'https://www.nib.si/eng/', target: '_blank' , alt:'National institute of biology', orientation: 'horizontal'},
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'Woods Hole Oceanographic Institution', orientation: 'horizontal'},
      { img: Harvard, href: 'https://www.harvard.edu/', target: '_blank' , alt:'Harvard', orientation: 'vertical'},
      { img: MPI_Bremen, href: 'https://mpi-bremen.de/en/Home.html', target: '_blank' , alt:'Max Planck In­sti­tute for Mar­ine Mi­cro­bi­o­logy', orientation: 'vertical'},
      { img: Rug_university, href: 'https://www.rug.nl/', target: '_blank' , alt:'University of Groningen', orientation: 'vertical'},
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