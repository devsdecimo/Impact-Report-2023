import React from "react";
import { SectionBrandsContainer } from "./SectionBrands.styles";



function SectionBrands({image,alt}) {
  return (
    <SectionBrandsContainer>
        <div className="brands-container">
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/WHOI.webp" alt="WHOI"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/ocean-exploration.webp" alt="Ocean Exploration"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/ASU.webp" alt="ASU"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/uvic.webp" alt="UVIC"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/MBARI.webp" alt="MBARI"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/Dalhousie.webp" alt="Dalhousie"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/university-of-washington.webp" alt="University of Washington"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/nasa.webp" alt="NASA"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/pmel.webp" alt="PMEL"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/OECI.webp" alt="OECI"/>
            <img src="assets/images/in_search_of_hydrothermal_lost_cities/brands/PAAaN.webp" alt="PAAaN"/>
        </div>
        
    </SectionBrandsContainer>
    
  );
}

export default SectionBrands;