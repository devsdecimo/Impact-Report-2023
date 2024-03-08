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


function SectionBrands({image,alt}) {
  let [slides, setSlides] = useState([])

  useEffect(() => {
    setSlides([
      { img: Wien , href: 'https://www.univie.ac.at/en/', target: '_blank' , alt:'Universität Wien'},
      { img: NIOZ, href: 'https://www.nioz.nl/en', target: '_blank' , alt:'Royal Netherlands Institute for Sea Research'},
      { img: LECOB, href: 'http://lecob.obs-banyuls.fr/index.php/en/', target: '_blank' , alt:'Benthic Ecogeochemistry Laboratory'},
      { img: NIB, href: 'https://www.nib.si/eng/', target: '_blank' , alt:'National institute of biology'},
      { img: WHOI, href: 'https://www.whoi.edu/', target: '_blank' , alt:'Woods Hole Oceanographic Institution'},
      { img: Harvard, href: 'https://www.harvard.edu/', target: '_blank' , alt:'Harvard'},
      { img: MPI_Bremen, href: 'https://mpi-bremen.de/en/Home.html', target: '_blank' , alt:'Max Planck In­sti­tute for Mar­ine Mi­cro­bi­o­logy'},
      { img: Rug_university, href: 'https://www.rug.nl/', target: '_blank' , alt:'University of Groningen'},
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